/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** _get(idx): get the item at index idx */

  _get(idx) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null && count !== idx) {
      count ++;
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode : null;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    // if LinkedList instance is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    // if LinkedList instance is empty, head should be set to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // prepend the LL with the newNode and move the head pointer to the newNode
      newNode.next = this.head;
      this.head = newNode;
    }

    // update the length of the list
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // find the last item
    let prev = null;
    let currentNode = this.head;
    let currTemp;
    // let next = currentNode.next;
    while (currentNode.next) {
      console.log(currentNode.val);
      currTemp = currentNode;
      // next = 
      currentNode = currentNode.next;
      prev = currTemp;
    }
    // remove it
    this.tail = prev;
    // return it
    return currentNode;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null && count !== idx) {
      count ++;
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode.val : null;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
