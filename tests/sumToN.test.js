import{describe, it, expect} from "vitest";
import{sumToN} from "../src/sumToN.js";


describe("Sum up to a number", () => {
 it("sumToN(0) returns 0", () => {
  expect(sumToN(0)).toBe(0);
 });

 it("sumToN(1) return 1", () => {
  expect(sumToN(1)).toBe(1); 
 });

 it("sumToN(4) returns 10", () => {
  expect(sumToN(4)).toBe(10);
 });

 it("sumToN(5) returns 15", () => {
  expect(sumToN(5)).toBe(15);
 });

});
