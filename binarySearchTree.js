// breadth first = use a queue
// depth first = no queue, but has in order, post order and pre order

// try using a stack in exactly the same way in breadth first 

// pop from stack, place into current, find its children push into stack, put current into result, continue

class Queue {
  constructor() {
    this.storage = [];
  }
    
  size() {
    return this.storage.length;
  }
    
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    return this.storage.shift();
  }
}

class Stack {
  constructor() {
    this.storage = [];
  }
    
}

function Node(value) {
  this.value = value || null;
  this.leftChild = null;
  this.rightChild = null;
}

function BinarySearchTree() {
  this.root = null;
  this.size = 0;
}

BinarySearchTree.prototype.insert = function(value) {
  if (this.root === null) {
    this.root = new Node(value);
    this.size++;
  }

  var findAndInsert = function(currentNode) {
    if (value > currentNode.value) {
      // look to right side
      if (currentNode.rightChild === null) {
        currentNode.rightChild = new Node(value);
      } else {
        findAndInsert(currentNode.rightChild);
      }
    } else if (value < currentNode.value) {
      // look to left side
      if (currentNode.leftChild === null) {
        currentNode.leftChild = new Node(value);
      } else {
        findAndInsert(currentNode.leftChild);
      }
    }
  };
  findAndInsert(this.root);
  this.size++;
};

BinarySearchTree.prototype.breadthFirst = function() {
  var queue = new Queue();
  var result = [];
    
    
  if (this.root === null) {
    return result;
  }
    
  queue.enqueue(this.root);
  var current;
    
  while (queue.size() > 0) {
    current = queue.dequeue(); // 5
    if (current.leftChild) {
      queue.enqueue(current.leftChild);
    }
    if (current.rightChild) {
      queue.enqueue(current.rightChild);
    }
    result.push(current.value);
  }
  return result;
};


let bst = new BinarySearchTree();



