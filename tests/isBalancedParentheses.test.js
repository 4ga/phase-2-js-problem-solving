import {describe, it, expect} from "vitest";
import {isBalancedParentheses} from "../src/isBalancedParentheses.js";

describe("Intro to Stacks with Balanced Parentheses", () => {
 it("() returns true", () => {
  expect(isBalancedParentheses("()")).toBe(true);
 });

 it("(()) returns true", () => {
  expect(isBalancedParentheses("(())")).toBe(true);
 });

 it("(() return false", () => {
  expect(isBalancedParentheses("(()")).toBe(false);
 });

 it(")( returns false", () => {
  expect(isBalancedParentheses(")(")).toBe(false);
 });

 it("empty string returns true", () => {
  expect(isBalancedParentheses("")).toBe(true);
 });

});
