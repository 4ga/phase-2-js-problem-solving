import {describe, it, expect} from "vitest";
import {BinarySearchTree} from "../src/binarySearchTree.js";

describe("BinarySearchTree", () => {
 it("creates a binary search tree instance", () => {
  const tree = new BinarySearchTree();
  expect(tree).toBeInstanceOf(BinarySearchTree);
 });

 it("starts with a null root", () => {
  const tree = new BinarySearchTree();
  expect(tree.root).toBe(null);
 });

 it("starts with size 0", () => {
  const tree = new BinarySearchTree();
  expect(tree.size).toBe(0);
 });

 it("insert adds the first value as the root node", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.root.value).toBe(10);
  expect(tree.root.left).toBe(null);
  expect(tree.root.right).toBe(null);
 });

 it("insert increases the size when adding the first node", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.size).toBe(1);
 });

 it("insert add a smaller value to the left of the root", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);

  expect(tree.root.left.value).toBe(5);
  expect(tree.size).toBe(2);
 });
 
 it("insert add a larger value to the right of the root", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(15);

  expect(tree.root.right.value).toBe(15);
  expect(tree.size).toBe(2);
 });

 it('insert adds values to both left and right of the root', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);

  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(15);
  expect(tree.size).toBe(3);
 });
 it('insert places values deeper in the tree', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.root.left.left.value).toBe(3);
  expect(tree.root.left.right.value).toBe(7);
  expect(tree.root.right.left.value).toBe(12);
  expect(tree.root.right.right.value).toBe(20);
  expect(tree.size).toBe(7);
});

it('insert ignores duplicate values', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(10);

  expect(tree.size).toBe(3);
  expect(tree.root.value).toBe(10);
  expect(tree.root.left.value).toBe(5);
  expect(tree.root.right.value).toBe(15);
});

it('contains returns false for an empty tree', () => {
  const tree = new BinarySearchTree();

  expect(tree.contains(10)).toBe(false);
});

it('contains returns true for the root value', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.contains(10)).toBe(true);
});

it('contains returns true for a value in the left subtree', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);

  expect(tree.contains(7)).toBe(true);
});

it('contains returns true for a value in the right subtree', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(12);
  tree.insert(20);

  expect(tree.contains(12)).toBe(true);
});

it('contains returns false for a missing value', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.contains(8)).toBe(false);
});

it('findMin returns undefined for an empty tree', () => {
  const tree = new BinarySearchTree();

  expect(tree.findMin()).toBe(undefined);
});

it('findMin returns the root value when the tree has one node', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.findMin()).toBe(10);
});

it('findMin returns the smallest value in the tree', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.findMin()).toBe(3);
 });
 
 it("findMax returns undefined for an empty tree", () => {
  const tree = new BinarySearchTree();
  
  expect(tree.findMax()).toBe(undefined);
 });

 it("findMax returns the root value when the tree has one node", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.findMax()).toBe(10);
 });

 it("findMax returns the largest value in the tree", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.findMax()).toBe(20);

 });
 
 it("inOrder returns an empty array for an empty tree", () =>{
  const tree = new BinarySearchTree();

  expect(tree.inOrder()).toEqual([]);
 }); 

 it("inOrder returns an array with one value for a one-node tree", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.inOrder()).toEqual([10]);
 });

 it("inOrder returns values in sorted order", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12); 
  tree.insert(20);
  
  expect(tree.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 20]);
 });

 it("preOrder returns an empty array for an empty tree", () => {
  const tree = new BinarySearchTree();
  expect(tree.preOrder()).toEqual([]);
 });
 
 it("preOrder returns an array with one value for a one-node tree", () =>{
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.preOrder()).toEqual([10]);
 });

 it("preOrder returns values in node-left-right order", () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.preOrder()).toEqual([10, 5, 3, 7, 15, 12, 20]);
 });

 it('postOrder returns an empty array for an empty tree', () => {
  const tree = new BinarySearchTree();

  expect(tree.postOrder()).toEqual([]);
});

it('postOrder returns an array with one value for a one-node tree', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);

  expect(tree.postOrder()).toEqual([10]);
});

it('postOrder returns values in left-right-node order', () => {
  const tree = new BinarySearchTree();
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(12);
  tree.insert(20);

  expect(tree.postOrder()).toEqual([3, 7, 5, 12, 20, 15, 10]);
});

});
