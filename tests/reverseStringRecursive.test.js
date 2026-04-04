import {describe, it, expect} from "vitest";
import {reverseStringRecursive} from "../src/reverseStringRecursive.js"

describe("Reverse a string", () => {
 it("empty string returns empty string ", () => {
  expect(reverseStringRecursive("")).toBe("");
 });

 it("a return a ", () => {
  expect(reverseStringRecursive("a")).toBe("a");
 });

 it("cat returns tac", () => {
  expect(reverseStringRecursive("cat")).toBe("tac");
 });

 it("hello returns olleh", () => {
  expect(reverseStringRecursive("hello")).toBe("olleh");
 });
});
