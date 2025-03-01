import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add this inside a Jest setup file (jest.setup.ts)
process.env.SUPPRESS_JEST_WARNINGS = "true"; // Suppress warnings globally
process.env.NODE_OPTIONS = "--no-deprecation"; // Suppress Node deprecation warnings

// Jest config
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Custom setup file
};

// Export Jest config
export default createJestConfig(config);
