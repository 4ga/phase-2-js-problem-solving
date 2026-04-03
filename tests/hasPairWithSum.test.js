import {describe, it, expect} from "vitest";
import {hasPairWithSum} from "../src/hasPairWithSum.js";

describe("Pair Sum with Nested Loops", () => {
 it("[1, 2, 3, 4] with target 5 returns true", () => {
  expect(hasPairWithSum([1, 2, 3, 4], 5)).toBe(true);
 });

 it("[1, 2, 3] with target 10 returns false", () => {
  expect(hasPairWithSum([1, 2, 3], 10)).toBe(false);
 });

 it("[] with target 5 returns false", () => {
  expect(hasPairWithSum([], 5)).toBe(false);
 });

 it("[7] with target 7 return false", () => {
  expect(hasPairWithSum([7], 7)).toBe(false);
 });

 it("[2, 2, 3] with target 4 returns true", () => {
  expect(hasPairWithSum([2, 2, 3], 4)).toBe(true);
 });

});
