module.exports = {
  setupFilesAfterEnv: [`${__dirname}/jest.setup.js`],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html'],
  transformIgnorePatterns: ['node_modules/(?!(deepdash-es|lodash-es)/)'],
}
