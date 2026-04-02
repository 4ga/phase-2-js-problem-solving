import {describe, it, expect} from "vitest";
import {isPalindrome} from "../src/isPalindrome.js"

describe("Determine if string is a palindrome", () => {
 it("return true for racecar", () => {
  expect(isPalindrome("racecar")).toBe(true);
 });

 it("return true for level", () => {
  expect(isPalindrome("level")).toBe(true); 
 })

 it("return false for hello", () => {
  expect(isPalindrome("hello")).toBe(false);
 })

 it("return true for a ", () => {
  expect(isPalindrome("a")).toBe(true);
 });

 it("return false for empty string", () => {
  expect(isPalindrome("")).toBe(true);
 });

 it("returns true for even-length palindrome abba", () => {
  expect(isPalindrome("abba")).toBe(true);
 })

 it("returns false for even-length non-palindrome abca", () => {
  expect(isPalindrome("abca")).toBe(false);
 })
});
