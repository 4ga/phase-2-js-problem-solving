import {describe, it, expect} from "vitest";
import {countLetters} from "../src/countLetters.js";

describe("count letters in string", () => {
 it("string with more than one characters repeated", () => {
  expect(countLetters("banana")).toStrictEqual({b: 1, a: 3, n: 2});
 })
 
 it("string with no character repeat", () => {
  expect(countLetters("abc")).toStrictEqual({a: 1, b: 1, c: 1});
 })

 it("empty string", () => {
  expect(countLetters("")).toStrictEqual({});
 })

 it("string with on character repeated", () => {
  expect(countLetters("aab")).toStrictEqual({a: 2, b: 1})
 })
})
