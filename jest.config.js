module.exports = {
  testEnvironment: 'node',
  // setupTestFrameworkScriptFile: 'jest-extended',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.vscode',
    '<rootDir>/dist',
    '<rootDir>/build',
    '<rootDir>/.next',
    '<rootDir>/scripts',
    '<rootDir>/pages',
  ],
}
