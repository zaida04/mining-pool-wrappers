module.exports = {
    testMatch: ['**/+(*.)+(spec|test).+(ts)?(x)'],
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'clover'],
    coverageThreshold: {
      global: {
        functions: 80,
        lines: 80,
        statements: 80
      }
    },
    roots: ['<rootDir>packages/'],
    coveragePathIgnorePatterns: ['<rootDir>dist/']
  };