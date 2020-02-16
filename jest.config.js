module.exports = {
  testMatch: ['**/src/**/*.test.js'],
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageReporters: [
    'lcov',
    'text',
    'html'
  ],
  verbose: true,
};
