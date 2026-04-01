import {describe, it, expect} from "vitest";
import {reverseArray} from "./src/reverseArray.js"

describe("Reverse an array's order", () => {
 it("reverses order of an array of numbers", () => {
  expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
 });

 it("reverse order of an array of strings", () => {
  expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
 })

 it("empty array", () => {
  expect(reverseArray([])).toEqual([]);
 })

 it("array with one element", () => {
  expect(reverseArray([5])).toEqual([5]);
 })
})
