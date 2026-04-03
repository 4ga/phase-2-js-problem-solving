import {describe, it, expect} from "vitest";
import {hasPairWithSumFast} from "../src/hasPairWithSumFast.js"

describe("Pair Sum Optimized with Object", () => {
 it("[1, 2, 3, 4] with target 5 returns true", () => {
  expect(hasPairWithSumFast([1, 2, 3, 4], 5)).toBe(true);
 });

 it("[1, 2, 3] with target 10 returns false", () => {
  expect(hasPairWithSumFast([1, 2, 3], 10)).toBe(false);
 });

 it("[] with target 5 returns false", () => {
  expect(hasPairWithSumFast([], 5)).toBe(false);
 });

 it("[7] with target 7 return false", () => {
  expect(hasPairWithSumFast([7], 7)).toBe(false);
 });

 it("[2, 2, 3] with target 4 returns true", () => {
  expect(hasPairWithSumFast([2, 2, 3], 4)).toBe(true);
 });

});
