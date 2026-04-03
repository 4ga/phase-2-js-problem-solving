import {describe, it, expect} from "vitest";
import {selectionSort} from "../src/selectionSort.js"


describe("Sort an array", () => {
 it("[3, 1, 4, 2] returns [1, 2, 3, 4]", () => {
  expect(selectionSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4]);
 });

 it("[5] returns [5] ", () => {
  expect(selectionSort([5])).toEqual([5]);
 });

 it("[] returns []", () => {
  expect(selectionSort([])).toEqual([]);
 });

 it("[9, 7, 7, 2] returns [2, 7, 7, 9]", () => {
  expect(selectionSort([9, 7, 7, 2])).toEqual([2, 7, 7, 9]);
 });

 it("no input mutation", () => {
  const input = [3, 1, 4, 2];
  const result = selectionSort(input);

  expect(result).toEqual([1, 2, 3, 4]);
  expect(input).toEqual([3, 1, 4, 2]);
 });

});
