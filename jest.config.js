// jest.config.mjs
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: [
        'jest-fetch-mock'
    ]
    // Optionally add more configuration options here
};