import {describe, it, expect} from "vitest";
import {BinarySearchTree} from "../src/binarySearchTree.js";

describe("search algorithms on BST", () => {
 it("breadthFirst returns an empty array for an empty tree", () => {
  const tree = new BinarySearchTree();
  
  expect(tree.breadthFirst()).toEqual([]);
 });

 it("breadthFirst returns the root value for a single-node tree", () => {
  const tree = new BinarySearchTree();
  
  tree.insert(10);

  expect(tree.breadthFirst()).toEqual([10]);
 });

 it("breadthFirst visits root, then left child, then right child", () => {
  const tree = new BinarySearchTree();
  
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);

  expect(tree.breadthFirst()).toEqual([10, 5, 15]);
 });

 it("breadthFirst visits nodes level by level in a deeper tree", () => {
  const tree = new BinarySearchTree();

  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(3);
  tree.insert(7);
  tree.insert(20);

  expect(tree.breadthFirst()).toEqual([10, 5, 15, 3, 7, 20]);
 });

 it("breadthFirst handles an uneven tree", () => {
  const tree = new BinarySearchTree();

  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(12);
  tree.insert(18);
  tree.insert(17);

  expect(tree.breadthFirst()).toEqual([10, 5, 15, 12, 18, 17]);
 });

});
