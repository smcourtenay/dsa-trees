/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if(this.root === null) return 0;
    let visitQueue = [this.root];
    let count = 1;
    while(visitQueue.length !== 0){
      
      let current = visitQueue.shift();
      console.log("THIS IS THE COUNT", count);
      if(current.left){
        visitQueue.push(current.left);
      }
      if(current.right){
        visitQueue.push(current.right);
      }
      
      if(current.left === null && current.right === null){
        console.log("FINAL COUNT", count)
        return count;
      }
      
      // Checks ahead to see if a leaf exists
      if(current.left || current.right){
        if((current.left.left || current.left.right) || (current.right.left || current.right.right))
        count++; // tracks the levels
      }


      console.log("FINISHED VISITING CURRENT NODE")

    }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
