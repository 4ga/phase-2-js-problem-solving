import {describe, it, expect} from "vitest"
import {sumArray} from "../src/sumArray.js";

describe("Sum Array", () => {
 it("sum three numbers in an array", () => {
  expect(sumArray([1, 2, 3])).toBe(6); 
 });
 
 it("sum one number in an array", () =>{
  expect(sumArray([5])).toBe(5);
 })

 it("empty array", () => {
  expect(sumArray([])).toBe(0);
 })

 it("include negative numbers", () => { 
  expect(sumArray([10, -2, 3])).toBe(11);
 })
});
