import {expect, it, describe} from "vitest";
import PriorityQueue from "../src/PriorityQueue.js";

describe("priority queue tests", () => {
 it("priority queue starts with an empty value array", () => {
  const queue = new PriorityQueue();

  expect(queue.values).toEqual([]);
 });

 it("enqueue adds a value with a priority", () => {
  const queue = new PriorityQueue();

  queue.enqueue("clean room", 3);
 
  expect(queue.values).toEqual([{value: "clean room", priority: 3}]);
 });

 it("enqueue bubbles higher priority items toward the front", () => {
  const queue = new PriorityQueue();
  
  queue.enqueue("clean room", 3);
  queue.enqueue("pay bill", 1);

  expect(queue.values[0]).toEqual({value: "pay bill", priority: 1});
 });

 it("peek returns the highest priority item without removing it", () => {
  const queue = new PriorityQueue();
  
  queue.enqueue("clean room", 3);
  queue.enqueue("pay bill", 1);
  queue.enqueue("reply to email", 2);

  expect(queue.peek()).toEqual({value: "pay bill", priority: 1});
  expect(queue.values.length).toBe(3);
 });
 
 it("dequeue returns undefined for an empty priority queue", () => {
  const queue = new PriorityQueue();
  
  expect(queue.dequeue()).toBeUndefined();
 });

 it("dequeue removes and returns the only item in the priority queue", () => {
  const queue = new PriorityQueue();
  
  queue.enqueue("pay bill", 1);
  
  expect(queue.dequeue()).toEqual({value: "pay bill", priority: 1});
  expect(queue.values).toEqual([]);
 });

 it("dequeue removes and returns the highest priority item from two items", () => {
  const queue = new PriorityQueue();
 
  queue.enqueue("clean room", 3);
  queue.enqueue("pay bill", 1);

  expect(queue.dequeue()).toEqual({value: "pay bill", priority: 1 });
  expect(queue.values).toEqual([{value: "clean room", priority: 3}]);
 });

 it("dequeue sinks the new root down to restore priority order", () => {
  const queue = new PriorityQueue();
  
  queue.enqueue("clean room", 3);
  queue.enqueue("pay bill", 1);
  queue.enqueue("reply to email", 2);
  queue.enqueue("walk dog", 4);

  expect(queue.dequeue()).toEqual({value: "pay bill", priority: 1});
  expect(queue.peek()).toEqual({value: "reply to email", priority: 2});
 });
 
 it("dequeue repeatedly removes items by priority order", () => {
  const queue = new PriorityQueue();

  queue.enqueue("clean room", 3);
  queue.enqueue("pay bill", 1);
  queue.enqueue("reply to email", 2);
  queue.enqueue("walk dog", 4);

  expect(queue.dequeue()).toEqual({value: "pay bill", priority: 1});
  expect(queue.dequeue()).toEqual({value: "reply to email", priority: 2});
  expect(queue.dequeue()).toEqual({value: "clean room", priority: 3}); 
  expect(queue.dequeue()).toEqual({value: "walk dog", priority: 4});
  expect(queue.dequeue()).toBeUndefined();
 });
});
