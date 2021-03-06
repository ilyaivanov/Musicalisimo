module.exports = function (wallaby) {

  // Babel, jest-cli and some other modules are located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  // Babel needs this
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.tsx',
      'src/**/*.ts',
      '!src/**/*.test.tsx',
      '!src/**/*.test.ts'
    ],

    tests: [
      'src/**/*.test.tsx',
      'src/**/*.test.ts'
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure({
        // as in node_modules/react-scripts/utils/createJestConfig.js
        testURL: 'http://localhost',
        setupFiles: [require('path').join(wallaby.localProjectDir, 'node_modules/react-scripts-ts/config/polyfills.js')],
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts-ts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts-ts/config/jest/cssTransform.js'),
          '^react-native$': 'react-native-web'
        }
      });
    },

    testFramework: 'jest'
  };
};