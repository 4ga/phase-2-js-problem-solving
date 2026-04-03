import {describe, it, expect} from "vitest";
import {firstUniqueChar} from "../src/firstUniqueChar.js";

describe("Find the first Non-Repeating Character", () => {
 it("a normal case", () => {
  expect(firstUniqueChar("aabccdeff")).toBe("b");
 });

 it("no unique character", () => {
  expect(firstUniqueChar("aabbcc")).toBe(null);
 });

 it("a unique character at the front", () => { 
  expect(firstUniqueChar("leetcode")).toBe("l");
 });

 it("empty string", () => {
  expect(firstUniqueChar("")).toBe(null);
 });
});
