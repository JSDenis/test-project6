"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
describe("App", () => {
    it("should return a greeting message", () => {
        const result = (0, app_1.greet)("World");
        expect(result).toEqual("Hello, World!");
    });
});
