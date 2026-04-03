import {describe, it, expect} from "vitest";
import {binarySearch} from "../src/binarySearch.js"

describe("Binary Search on a Sorted Array", () => {
 it("finds 7 in [1, 3, 5, 7, 9] and returns 3", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
 });

 it("finds 1 and returns 0", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
 });

 it("finds 9 and returns 4", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
 });

 it("finds 4 and returns -1", () => {
  expect(binarySearch([1, 3, 5, 7, 9], 4)).toBe(-1);
 });

 it("empty array", () => {
  expect(binarySearch([], 1)).toBe(-1);
 });

});
