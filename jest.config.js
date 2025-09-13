const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  testMatch: [
    "**/*.test.ts",
    "**/*.spec.ts"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/src/problem4/test\\.ts$",
    "/src/problem4/test\\.js$"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
};