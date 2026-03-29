import {describe, it, expect} from "vitest";
import {countEvenNumbers} from "../src/countEvenNumbers.js"

describe("Count even numbers", () =>{
 it("count even numbers in an array", () =>{
  expect(countEvenNumbers([1, 2, 3, 4, 6])).toBe(3);
 })

 it("no even numbers", () =>{
  expect(countEvenNumbers([1, 3, 5])).toBe(0);
 })

 it("empty array", () => {
  expect(countEvenNumbers([])).toBe(0);
 })

 it("negative numbers", () => {
  expect(countEvenNumbers([-2, -3, -4])).toBe(2);
 })
})
