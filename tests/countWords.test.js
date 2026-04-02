import {describe, it, expect} from "vitest";
import {countWords} from "../src/countWords.js"

describe("Count words in a sentence", () => {
 it("string with two words", () => {
   expect(countWords("hello world")).toBe(2);
 });

 it("string with three words", () => {
   expect(countWords("one two three")).toBe(3);
 });

 it("string with one word", () => {
   expect(countWords("word")).toBe(1);
 });

 it("empty string", () => {
   expect(countWords("")).toBe(0);
 })
})
