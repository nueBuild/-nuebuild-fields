module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!bootstrap-vue)'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testPathIgnorePatterns: ['.eslintrc.js'],
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'],
  testMatch: ['<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'],
  testURL: 'http://localhost/',
}
