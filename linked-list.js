// push: what if there is a head but no tail? am I right that this possible? why is that scenario not addressed? solution seems to assume that if there is a head there is also a tail.

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
    // invalid index
    if (idx < 0 || idx > this.length - 1) {
      throw new Error("Invalid index");
    }

    let currentNode = this.head;
    for (let i = 1; i < idx + 1; i++) {
      currentNode = currentNode.next
    }
    return currentNode;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    // LinkedList instance is empty (no head and therefore no tail)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    // LinkedList instance is NOT empty (has at least a head)
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    // LinkedList instance is empty (i.e., no head)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    } 
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // empty list
    if (!this.length) throw new Error("Cannot remove a node from an empty list");

    const node = this._get(this.length - 1);

    // list length = 1
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // list length > 1
    if (this.length > 1) {
      const prev = this._get(this.length - 2);
      this.tail = prev;
      prev.next = null;
      this.length -= 1;
    }
    return node.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // list instance is empty
    if (!this.head) {
      throw new Error("Cannot remove from empty list");
    }

    const node = this.head;

    // list length is 1
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return node.val;
    // list length > 1  
    } else {
      this.head = this.head.next;
    }

    this.length -= 1;
    return node.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let node = this._get(idx);
    node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // invalid index
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(val);

    // insert at beginning
    if (idx === 0) return this.unshift(val);

    // insert at end
    if (idx === this.length) return this.push(val);

    // non-empty list
    const prev = this._get(idx - 1);
    const node = this._get(idx);

    prev.next = newNode;
    newNode.next = node;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // invalid index
    if (idx < 0 || idx > this.length - 1) {
      throw new Error("Invalid index");
    }
    
    // empty list
    if (!this.length) {
      throw new Error("Cannot remove from empty list");
    }

    // remove from beginning
    if (idx === 0) return this.shift();

    // remove from end
    if (idx === this.length) return this.pop();

    // other non-empty list
    const prev = this._get(idx - 1);
    const node = this._get(idx);
    const aft = node.next;
    prev.next = aft;
    this.length -= 1;
    return node.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.length) return 0;

    let sum = 0;
    for(let i = 0; i < this.length; i++) {
      const val = this.getAt(i);
      sum += val;
    }
    const avg = sum / this.length;
    return avg;
  }
}

const history = new LinkedList();
history.push(3);
history.push(10);
history.push(46);
// console.log(history);
// console.log(history.getAt(3));
// console.log(history.pop());
console.log("HISTORY: ", history);
console.log("LENGTH: ", history.length);
console.log("POP: ", history.pop());
console.log("HISTORY: ", history);
console.log("POP: ", history.pop());
console.log("LENGTH2: ", history.length);

module.exports = LinkedList;
