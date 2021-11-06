module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '!**/build/**',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
