import {describe, it, expect} from "vitest";
import {Queue} from "../src/queue.js";

describe('Queue', () => {
 it("create a queue instance", () => {
  const queue = new Queue();
  expect(queue).toBeInstanceOf(Queue);
 });

 it("starts empty", ()=>{
  const queue = new Queue();
  expect(queue.isEmpty()).toBe(true);
 });

 it("has size 0 when created", () => {
  const queue = new Queue();
  expect(queue.size()).toBe(0);
 });

 it("enqueue adds one item to the queue", () => {
  const queue = new Queue();
  queue.enqueue(10);

  expect(queue.size()).toBe(1);
  expect(queue.isEmpty()).toBe(false);
 });

 it("enqueue adds multiple items to be the queue", () =>{
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.size()).toBe(3);
 });

 it("peek returns the front item", () =>{
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.peek()).toBe(10);
 });

 it("peek does not remove the front item", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);

  expect(queue.peek()).toBe(10);
  expect(queue.size()).toBe(2);
 });

 it("peek returns undefined for an empty queue", () => {
  const queue = new Queue();
  
  expect(queue.peek()).toBe(undefined);
 });

 it("dequeue returns the front item", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.dequeue()).toBe(10);
 });

 it("dequeue removes the front item", () => {
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  
  expect(queue.dequeue()).toBe(10);
  expect(queue.size()).toBe(1);
  expect(queue.peek()).toBe(20);
 });

 it("dequeue returns undefined for an empty queue", () => {
  const queue = new Queue();
  queue.enqueue(10);

  expect(queue.dequeue()).toBe(10);
  expect(queue.isEmpty()).toBe(true);
  expect(queue.size()).toBe(0);
 });
});
