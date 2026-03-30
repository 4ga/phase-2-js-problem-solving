import {describe, it, expect} from "vitest";
import {removeDuplicates} from "../src/removeDuplicates.js"

describe("Remove duplicates in an Array", () => {
 it("remove duplicates in array of numbers", () => {
  expect(removeDuplicates([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
 })

 it("remove duplicates in array of strings", () => {
  expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
 })

 it("empty array", () => {
  expect(removeDuplicates([])).toEqual([]);
 })

 it("all duplicates", () => {
  expect(removeDuplicates([5, 5, 5])).toEqual([5]);
 })

 it("no changes to the original input", () => {
  const input = [1, 2, 2, 3];
  const result = removeDuplicates(input);

  expect(input).toEqual([1, 2, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
 })

})
