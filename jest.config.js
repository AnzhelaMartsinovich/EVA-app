module.exports = {
  moduleNameMapper: {
    '\\.(png|svg|pdf|jpg|jpeg)$': '<rootDir>/fileMock.js',
  },
  moduleDirectories: ['node_modules', './src'],
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
