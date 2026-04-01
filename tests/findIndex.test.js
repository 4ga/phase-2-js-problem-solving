import {describe, it, expect} from "vitest";
import {findIndex} from "../src/findIndex.js";

describe("Linear Search", ()=> {
 it("finds 20", () => {
  expect(findIndex([10, 20, 30], 20)).toBe(1);
 })
 
 it("finds 'c' ", () => {
  expect(findIndex(["a", "b", "c"], "c")).toBe(2);
 })

 it("target is missing", () => {
  expect(findIndex([5, 6, 7], 9)).toBe(-1)
 })

 it("empty array", () => {
  expect(findIndex([], 2)).toBe(-1);
 })
})
