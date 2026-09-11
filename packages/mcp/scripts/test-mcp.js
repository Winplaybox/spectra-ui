import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serverPath = path.resolve(__dirname, '../src/index.js');

const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'inherit']
});

let step = 0;

server.stdout.on('data', (data) => {
  const lines = data.toString().split('\n').filter(Boolean);
  for (const line of lines) {
    const res = JSON.parse(line);
    console.log(`[Test Step ${step}] Received response:`, res.id, res.result ? 'SUCCESS' : 'ERROR');

    if (step === 0) {
      console.log('Initialize Result:', res.result.serverInfo);
      step = 1;
      send({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} });
    } else if (step === 1) {
      console.log('Tools available:', res.result.tools.map((t) => t.name));
      step = 2;
      send({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'spectra_get_component_api',
          arguments: { component: 'button' }
        }
      });
    } else if (step === 2) {
      const content = JSON.parse(res.result.content[0].text);
      console.log('Component API response for Button:', content.name, 'Props:', content.props.length);
      step = 3;
      send({
        jsonrpc: '2.0',
        id: 4,
        method: 'tools/call',
        params: {
          name: 'spectra_search_tokens',
          arguments: { category: 'colors', search: 'sunken', theme: 'dark' }
        }
      });
    } else if (step === 3) {
      const tokens = JSON.parse(res.result.content[0].text);
      console.log('Search Tokens Result:', tokens);
      console.log('\nAll MCP Server tests PASSED! Exiting.');
      server.kill();
      process.exit(0);
    }
  }
});

function send(msg) {
  server.stdin.write(JSON.stringify(msg) + '\n');
}

// Kickoff initialize
send({
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'test-client', version: '1.0' }
  }
});
