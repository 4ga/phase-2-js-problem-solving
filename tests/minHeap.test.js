import {describe, it, expect} from "vitest";
import MinHeap from "../src/MinHeap.js";

describe("MinHeap tests", () => {
 it("min heap starts with an empty values arrays", () => {
  const heap = new MinHeap();

  expect(heap.values).toEqual([]);
 });

 it("peek returns undefined for an empty heap", () => {
  const heap = new MinHeap();

  expect(heap.peek()).toBeUndefined();
 });

 it("insert adds a value to an empty heap", () => {
  const heap = new MinHeap();
  
  heap.insert(10);
  
  expect(heap.values).toEqual([10]);
  expect(heap.peek()).toBe(10);
 });

 it("insert bubbles a smaller value up to the root", () => {
  const heap = new MinHeap();

  heap.insert(10);
  heap.insert(5);

  expect(heap.values).toEqual([5, 10]);
  expect(heap.peek()).toBe(5);
 });

 it("insert bubles a value up through multiple levels", () => {
  const heap = new MinHeap();

  heap.insert(20);
  heap.insert(15);
  heap.insert(10);
  heap.insert(5);

  expect(heap.peek()).toBe(5);
  expect(heap.values[0]).toBe(5);
 });

 it("insert keeps larger values below smaller values", () => {
  const heap = new MinHeap();

  heap.insert(5);
  heap.insert(10);
  heap.insert(15);

  expect(heap.peek()).toBe(5);
  expect(heap.values[0]).toBe(5);
 });
});
