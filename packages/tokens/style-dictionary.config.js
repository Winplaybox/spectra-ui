// packages/tokens/style-dictionary.config.js

module.exports = {
  source: [
    'primitives/**/*.json',
    'semantic/**/*.json',
    'packs/minimal.json',
    'modes/**/*.json',
  ],
  platforms: {
    // Web: CSS Variables
    css: {
      transformGroup: 'css',
      buildPath: '../react/src/theme/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
            showFileHeader: false,
          },
        },
      ],
    },
    // React Native: JavaScript ES6 object
    js: {
      transformGroup: 'js',
      buildPath: '../react-native/src/theme/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'typescript/es6-declarations',
          options: {
            outputReferences: true,
            showFileHeader: false,
          },
        },
      ],
    },
    // JSON for tooling/inspection
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
};
