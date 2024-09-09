export default {
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { useESM: true }],
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "jest-environment-jsdom",
};
