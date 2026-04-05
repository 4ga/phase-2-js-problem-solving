import {describe, it, expect} from "vitest";
import {isBalancedBrackets} from "../src/isBalancedBrackets.js";

describe("Balanced Brackets with Multiple Types", () => {
 it("()[]{} returns true", () => {
  expect(isBalancedBrackets("()[]{}")).toBe(true);
 });

 it("([{}]) returns true", () => {
  expect(isBalancedBrackets("([{}])")).toBe(true);
 });

 it("(] returns false", () => {
  expect(isBalancedBrackets("(]")).toBe(false);
 });

 it("([)] returns false", () => {
  expect(isBalancedBrackets("([)]")).toBe(false);
 });

 it("empty string returns true", () => {
  expect(isBalancedBrackets("")).toBe(true);
 });

});
