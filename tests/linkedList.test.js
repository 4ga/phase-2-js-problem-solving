import {describe, it, expect} from "vitest";
import {LinkedList} from "../src/linkedList.js"

describe("LinkedList", () => {
 it("creates a linked list instance", () => {
  const list = new LinkedList();
  expect(list).toBeInstanceOf(LinkedList);
 });

 it("starts with a null head", () => {
  const list = new LinkedList();
  expect(list.head).toBe(null);
 });

 it("starts with a null tail", () => {
  const list = new LinkedList();
  expect(list.tail).toBe(null);
 });

 it("append add the first node to the list", () => {
  const list = new LinkedList();
  list.append(10);

  expect(list.head.value).toBe(10);
  expect(list.tail.value).toBe(10);
  expect(list.size).toBe(1);
 });

 it("when the list has one node, head and tail are the same node", () => {
  const list = new LinkedList();
  list.append(10);
   
  expect(list.head).toBe(list.tail);
  });

 it("append adds multiple nodes to the list", () => {
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);

  expect(list.head.value).toBe(10);
  expect(list.head.next.value).toBe(20);
  expect(list.tail.value).toBe(30);
  expect(list.size).toBe(3);
 });

 it("tail.next is null", () =>{
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);

  expect(list.tail.next).toBe(null);
 });

 it("prepend adds a node tot he front of the list", () => {
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.prepend(5);

  expect(list.head.value).toBe(5);
  expect(list.head.next.value).toBe(10);
  expect(list.tail.value). toBe(20);
  expect(list.size).toBe(3);
 });

 it("prepend works on an empty list", () => {
  const list = new LinkedList();
  list.prepend(10);

  expect(list.head.value).toBe(10);
  expect(list.tail.value).toBe(10);
  expect(list.size).toBe(1);
  });

 it("contains return true when the value exists in the list", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);
 
  expect(list.contains(10)).toBe(true);
 });

 it("contains returns false when the value does not exist in the list", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);
   
  expect(list.contains(90)).toBe(false);
 });

 it("contains returns false for an empty list", () => {
  const list = new LinkedList();

  expect(list.contains(10)).toBe(false);
 });

 it("removeHead return removed value", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);

  expect(list.removeHead()).toBe(5);
 });

 it("removeHead moves head to the next node", () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);
  
  list.removeHead();
  
  expect(list.head.value).toBe(10);
  expect(list.size).toBe(2);
 });

 it("removeHead updates head and tail to null when removing the only node", () =>{
  const list = new LinkedList();
  list.append(10);

  expect(list.removeHead()).toBe(10);
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.size).toBe(0);
 });

 it("removeHead returns undefined for an empty list", () => {
  const list = new LinkedList();
  
  expect(list.removeHead()).toBe(undefined);
 });

 it('removeTail returns the removed value', () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);

  expect(list.removeTail()).toBe(20);
});

it('removeTail moves tail to the previous node', () => {
  const list = new LinkedList();
  list.append(5);
  list.append(10);
  list.append(20);

  list.removeTail();

  expect(list.tail.value).toBe(10);
  expect(list.tail.next).toBe(null);
  expect(list.size).toBe(2);
});

it('removeTail updates head and tail to null when removing the only node', () => {
  const list = new LinkedList();
  list.append(10);

  expect(list.removeTail()).toBe(10);
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.size).toBe(0);
});

it('removeTail returns undefined for an empty list', () => {
  const list = new LinkedList();

  expect(list.removeTail()).toBe(undefined);
});

});
