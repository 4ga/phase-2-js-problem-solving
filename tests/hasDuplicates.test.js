import {describe, it, expect} from "vitest"
import {hasDuplicates} from "../src/hasDuplicates.js"


describe("has duplicates", () => {
 it("no change to original array", () => {
  const input = [3, 1, 3];
  hasDuplicates(input);
  expect(input).toEqual([3, 1, 3])
 })

 it("duplicate numbers", () => {
  expect(hasDuplicates([1, 2, 3, 2])).toBe(true);
 });

 it("all unique numbers", () => {
  expect(hasDuplicates([1, 2, 3])).toBe(false)
 })

 it("empty array", () => {
  expect(hasDuplicates([])).toBe(false);
 })

 it("duplicate strings", () => {
  expect(hasDuplicates(["a", "b", "a"])).toBe(true);
 })
})
