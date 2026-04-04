import {describe, it, expect} from "vitest";
import {factorial} from "../src/factorial.js"

describe("Calculate factorial", () => {
 it("factorial(0) returns 1", () => {
  expect(factorial(0)).toBe(1);
 });

 it("factorial(1) returns 1", () => {
  expect(factorial(1)).toBe(1);
 });

 it("factorial(4) returns 24", () => {
  expect(factorial(4)).toBe(24);
 });

 it("factorial(5) returns 120", () => {
  expect(factorial(5)).toBe(120);
 });

});
