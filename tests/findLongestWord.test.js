import {describe, it, expect} from "vitest";
import {findLongestWord} from "../src/findLongestWord.js"

describe("Find the Longest Word", () => {
 it("I love JavaScript return JavaScript", () => {
  expect(findLongestWord("I love JavaScript")).toBe("JavaScript");
 });

 it("cat dog fish returns fish", () => {
  expect(findLongestWord("cat dog fish")).toBe("fish");
 });

 it("one two six returns one", () => {
  expect(findLongestWord("one two six")).toBe("one");
 });

 it("empty string", () => {
  expect(findLongestWord("")).toBe("");
 });
});
