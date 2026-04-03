import {describe, it, expect} from "vitest";
import {areAnagrams} from "../src/areAnagrams.js";

describe("Check whether two strings are anagrams", () => {
 it("listen, silent returns true", () => {
  expect(areAnagrams("listen", "silent")).toBe(true);
 });

 it("evil and vile returns true", () => {
  expect(areAnagrams("evil", "vile")).toBe(true);
 });

 it("rat and car returns false", () => {
  expect(areAnagrams("rat", "car")).toBe(false);
 });

 it("empty string", () => {
  expect(areAnagrams("", "")).toBe(true);
 });

 it("aab and abb returns false", () => {
  expect(areAnagrams("aab", "abb")).toBe(false);
 });

});
