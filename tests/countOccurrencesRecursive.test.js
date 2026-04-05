import {describe, it, expect} from "vitest";
import {countOccurrencesRecursive} from "../src/countOccurrencesRecursive.js";

describe("Recursive Count of a Target Value", () => {
 it("[] with target 2 returns 0", () => {
  expect(countOccurrencesRecursive([], 2)).toBe(0);
 });

 it("[2] with target 2 returns 1", () => {
  expect(countOccurrencesRecursive([2], 2)).toBe(1);
 });

 it("[1, 2, 2, 3] with target 2 return 2", () => {
  expect(countOccurrencesRecursive([1, 2, 2, 3], 2)).toBe(2);
 });

 it("['a', 'b', 'a', 'c'] with target 'a' returns 2", () => {
  expect(countOccurrencesRecursive(["a", "b", "a", "c"], "a")).toBe(2);
 });

});
