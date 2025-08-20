import type { Config } from "jest";

const config:Config = {
    rootDir : './',
    testEnvironment : 'jsdom', //setting up environment with jsdom
    setupFilesAfterEnv : ["<rootDir>/test/jest.setup.ts"], // path to setup file
    transform : {
        "^.+\\.tsx?$" : "ts-jest" // process '*.tsx' files with 'ts-jest'
    },
}

export default config