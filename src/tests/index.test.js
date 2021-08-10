import { expect } from "@jest/globals";
import testFunc from "../modules/index.js";

test("IDEK", () => {
    expect(testFunc("hello")).toBe("hello");
});