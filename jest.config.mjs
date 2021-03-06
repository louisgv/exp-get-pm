/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {

  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest/presets/default-esm",
  globals: {
    "ts-jest": {
      useESM: true
    }
  },
  testMatch: ["**/*.test.ts"],
  verbose: true,
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/dist/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
}
export default config
