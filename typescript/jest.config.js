/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['dist'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  }
};
