import {describe, it, expect} from "vitest";
import {mergeSortedArrays} from "../src/mergeSortedArrays.js"

describe("Merge Two Sorted Arrays", () => {
 it("[1, 3, 5],[2, 4, 6] returns [1, 2, 3, 4, 5, 6]", () => {
  expect(mergeSortedArrays([1, 3, 5],[2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
 });

 it("[1, 2, 2], [2, 3] returns [1, 2, 2, 2, 3]", () => {
  expect(mergeSortedArrays([1, 2, 2], [2, 3])).toEqual([1, 2, 2, 2, 3]);
 });

 it("[], [1, 2]", () => {
  expect(mergeSortedArrays([], [1, 2])).toEqual([1, 2]);
 });

 it("[1, 4], []", () => {
  expect(mergeSortedArrays([1, 4], [])).toEqual([1, 4]);
 });

 it("does not mutate the original arrays", () => {
  const a = [1, 3, 5];
  const b = [2, 4, 6]; 
  const result = mergeSortedArrays(a, b);

  expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  expect(a).toEqual([1, 3, 5]);
  expect(b).toEqual([2, 4, 6]);
 });

});
