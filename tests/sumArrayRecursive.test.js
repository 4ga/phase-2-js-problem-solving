import {describe, it, expect} from "vitest";
import {sumArrayRecursive} from "../src/sumArrayRecursive.js";


describe("Recursively sum numbers in an array", () => {
 it("[] returns 0", () => {
  expect(sumArrayRecursive([])).toBe(0);
 }); 

 it("[5] returns 5", () => {
  expect(sumArrayRecursive([5])).toBe(5);
 });

 it("[1, 2, 3] returns 6", () => {
  expect(sumArrayRecursive([1, 2, 3])).toBe(6);
 });

 it("[10, -2, 3] returns 11", () => {
  expect(sumArrayRecursive([10, -2, 3])).toBe(11);
 });

});
