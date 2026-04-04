import {describe, it, expect} from "vitest";
import {mergeSort} from "../src/mergeSort.js"

describe("Merge Sort", () => {
 it("[3, 1, 4, 2] returns [1, 2, 3, 4]", () => {
  expect(mergeSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
 });

 it("[5] returns [5]", () => {
  expect(mergeSort([5])).toEqual([5]);
 });

 it("[] returns []", () => {
  expect(mergeSort([])).toEqual([]);
 });

 it("[9, 7, 7, 2] returns [2, 7, 7, 9]", () => {
  expect(mergeSort([9, 7, 7, 2])).toEqual([2, 7, 7, 9]);
 });

 it("no input mutuation", () => {
  const input = [4, 2, 1, 9, 8];
  const result = mergeSort(input);

  expect(result).toEqual([1, 2, 4, 8, 9]);
  expect(input).toEqual([4, 2, 1, 9, 8]);
  
 });
});
