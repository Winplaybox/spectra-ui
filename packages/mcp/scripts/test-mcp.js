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
      console.log('Tools count:', res.result.tools.length);
      console.log('Tools available:', res.result.tools.map((t) => t.name));
      step = 2;
      send({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'spectra_get_component_for_platform',
          arguments: { component: 'TextInput', platform: 'ios' }
        }
      });
    } else if (step === 2) {
      const content = JSON.parse(res.result.content[0].text);
      console.log('TextInput on iOS contract:', content.component, 'Support:', content.support, 'Implementation:', content.implementation);
      console.log('Unsupported recipes filtered out:', content.unsupportedRecipes);
      if (content.support !== 'native') throw new Error('Expected native support for TextInput on iOS');
      step = 3;
      send({
        jsonrpc: '2.0',
        id: 4,
        method: 'tools/call',
        params: {
          name: 'spectra_get_hook_for_platform',
          arguments: { hook: 'useHover', platform: 'android' }
        }
      });
    } else if (step === 3) {
      const hookData = JSON.parse(res.result.content[0].text);
      console.log('useHover on Android:', hookData.hook, 'Support:', hookData.support, 'Alternative:', hookData.alternative);
      if (hookData.support !== 'unsupported') throw new Error('Expected useHover to be unsupported on Android touch device');
      step = 4;
      send({
        jsonrpc: '2.0',
        id: 5,
        method: 'tools/call',
        params: {
          name: 'spectra_get_platform_capabilities',
          arguments: { platform: 'windows' }
        }
      });
    } else if (step === 4) {
      const winCaps = JSON.parse(res.result.content[0].text);
      console.log('Windows Platform Renderer:', winCaps.renderer, 'Primary Paradigm:', winCaps.primaryParadigm);
      console.log('Supported components count on Windows:', winCaps.supportedComponentsCount);
      step = 5;
      send({
        jsonrpc: '2.0',
        id: 6,
        method: 'tools/call',
        params: {
          name: 'spectra_get_recipes_for_platform',
          arguments: { component: 'TextInput', platform: 'android' }
        }
      });
    } else if (step === 5) {
      const recipesData = JSON.parse(res.result.content[0].text);
      console.log('Recipes for TextInput on Android:', recipesData.recipesCount, 'recipes');
      console.log('\nAll Multi-Platform MCP Server tests PASSED! Exiting.');
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
