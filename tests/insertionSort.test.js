import {describe, it, expect} from "vitest"
import {insertionSort} from "../src/insertionSort.js"

describe("Sort an array", () => {
 it("[3, 1, 4, 2] returns [1, 2, 3, 4]", () => {
  expect(insertionSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
 });

 it("[5] return [5]", () => {
  expect(insertionSort([5])).toEqual([5]);
 });

 it("[] return []", () => {
  expect(insertionSort([])).toEqual([]);
 });

 it("[9, 7, 7, 2] return [2, 7, 7, 9]", () => {
  expect(insertionSort([9, 7, 7, 2])).toEqual([2, 7, 7, 9]);
 });

 it("does not mutate the original array", () => {
  const input = [3, 1, 4, 2];
  const result = insertionSort(input);

  expect(result).toEqual([1, 2, 3, 4]);
  expect(input).toEqual([3, 1, 4, 2]);
 });

});
