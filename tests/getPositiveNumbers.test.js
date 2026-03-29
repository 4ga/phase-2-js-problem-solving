import {describe, it, expect} from "vitest"
import {getPositiveNumbers} from "../src/getPositiveNumbers.js"


describe("get all positive numbers", () => {
 it("mixed positive, negative, and zero values", () => {
  expect(getPositiveNumbers([3, -1, 0, 8, -5, 2])).toEqual([3, 8, 2]);
 })

 it("all negative values", () =>{
  expect(getPositiveNumbers([-3, -2])).toEqual([]);
 })

 it("empty array", () => {
  expect(getPositiveNumbers([])).toEqual([]);
 })

 it("all positive values", () => {
  expect(getPositiveNumbers([1, 2, 3])).toEqual([1, 2, 3])
 })
})
