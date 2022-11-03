"use strict";
exports.__esModule = true;
var config = {
    preset: "ts-jest",
    roots: ["<rootDir>/src/__tests__"],
    collectCoverage: true,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.{ts,tsx}",
        "!<rootDir>/src/**/*.interface.ts",
        "!<rootDir>/src/**/*.mock.ts",
        "!<rootDir>/src/**/*.module.ts",
        "!<rootDir>/src/**/*.spec.ts",
        "!<rootDir>/src/**/*.test.ts",
        "!<rootDir>/src/**/*.d.ts",
    ],
    coverageThreshold: {
        global: {
            branches: 75
        }
    },
    coverageDirectory: "../coverage",
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    setupFiles: ["react-app-polyfill/jsdom"],
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    modulePaths: [],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/fileMock.ts",
        "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.ts"
    },
    moduleFileExtensions: ["web.js", "js", "web.ts", "ts", "web.tsx", "tsx", "json", "web.jsx", "jsx", "node"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    resetMocks: true
};
exports["default"] = config;
