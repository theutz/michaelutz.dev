module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress/",
  ],
  moduleNameMapper: {
    "^(pages|components|__tests__|utils|hooks)/(.*)$": "<rootDir>/$1/$2",
  },
};
