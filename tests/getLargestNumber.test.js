import {describe, it, expect} from "vitest";
import {getLargestNumber} from "../src/getLargestNumber.js"

describe("Get largest number", () => {
 it("Return largest number", () => {
  expect(getLargestNumber([3, 7, 2, 9, 4])).toBe(9);
 })
 
 it("Largest number, array length of 1 ", () => {
  expect(getLargestNumber([5])).toBe(5);
 })

 it("Largest number, array of negative numbers", () => {
  expect(getLargestNumber([-10, -3, -20])).toBe(-3);
 })

 it("Largest value at beginning of array", () => {
  expect(getLargestNumber([12, 4, 1, 0])).toBe(12);
 })
})
