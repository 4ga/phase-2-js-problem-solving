import {describe, it, expect} from "vitest";
import {Stack} from "../src/stack.js";

describe("Stack", () => {
 it("creates a stack instance", () => {
  const stack = new Stack();
  expect(stack).toBeInstanceOf(Stack);
 });

 it("starts empty", () => {
  const stack = new Stack();
  expect(stack.isEmpty()).toBe(true);
 });

 it("has size 0 when created", () => {
  const stack = new Stack();
  expect(stack.size()).toBe(0);
 });

 it("push adds on item to the stack", () => {
  const stack = new Stack();
  stack.push(10);

  expect(stack.size()).toBe(1);
  expect(stack.isEmpty()).toBe(false);
 });

 it("push adds multiple items to the stack", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);

  expect(stack.size()).toBe(3);
 });

 it("peek returns the top item", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);

 expect(stack.peek()).toBe(30);
 });

 it("peek does not remove the top item", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);

 expect(stack.peek()).toBe(20);
 expect(stack.size()).toBe(2);
 });

 it("peek returns undefined for an empty stack", () => {
  const stack = new Stack();
  
  expect(stack.peek()).toBe(undefined);
 });

 it("pop returns the top item", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);

  expect(stack.pop()).toBe(30);
 });

 it("pop removes the top item", () => {
  const stack = new Stack();
  stack.push(10);
  stack.push(20);

  expect(stack.pop()).toBe(20);
  expect(stack.size()).toBe(1);
  expect(stack.peek()).toBe(10);
 });

  it("pop returns undefined for an empty stack", () => {
   const stack = new Stack();
   
    expect(stack.pop()).toBe(undefined);
  });

  it("pop makes the stack empty when the last item is removed", () => {
   const stack = new Stack();
   stack.push(10);

   expect(stack.pop()).toBe(10);
   expect(stack.isEmpty()).toBe(true);
   expect(stack.size()).toBe(0);
  });
});

