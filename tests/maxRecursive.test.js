import {describe, it, expect} from "vitest";
import {maxRecursive} from "../src/maxRecursive.js";

describe("Returns largest number in Array (Recursion)", () => {
 it("[5] return 5", () => {
  expect(maxRecursive([5])).toBe(5);
 });
 
 it("[1, 7, 3] returns 7", () => {
  expect(maxRecursive([1, 7, 3])).toBe(7);
 });

 it("[-10, -3, -20] returns -3 ", () => {
  expect(maxRecursive([-10, -3, -20])).toBe(-3);
 });

 it("[9, 2, 9, 1] returns 9" ,() => {
  expect(maxRecursive([9, 2, 9, 1])).toBe(9);
 });

});
