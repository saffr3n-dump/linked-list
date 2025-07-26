class Node {
  constructor(value) {
    this.value = value ?? null;
    this.next = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  constructor(...values) {
    if (!values.length) return;
    for (const value of values) {
      this.push(value);
    }
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  push(value) {
    const node = new Node(value);
    if (!this.#size) {
      this.#head = this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    ++this.#size;
    return this.#size;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.#size) {
      this.#head = this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }
    ++this.#size;
    return this.#size;
  }

  at(index) {
    if (!this.#size) return null;
    let node = this.#head;
    for (let i = 0; i < index; ++i) {
      if (!node) break;
      node = node.next;
    }
    return node;
  }

  pop() {
    if (!this.#size) return null;
    if (this.#size === 1) {
      const node = this.#head;
      this.#head = this.#tail = null;
      return node;
    }
    const parent = this.at(this.#size - 2);
    const node = parent.next;
    parent.next = null;
    --this.#size;
    return node;
  }

  shift() {
    if (!this.#size) return null;
    if (this.#size === 1) {
      const node = this.#head;
      this.#head = this.#tail = null;
      return node;
    }
    const node = this.#head;
    this.#head = node.next;
    --this.#size;
    return node;
  }

  contains(value) {
    let node = this.#head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  find(value) {
    let node = this.#head;
    for (let i = 0; i < this.#size; ++i) {
      if (node.value === value) return i;
      node = node.next;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.#size) {
      throw new RangeError('Provided index is out of list bounds');
    }
    const node = new Node(value);
    if (index === 0) return this.unshift(value);
    const parent = this.at(index - 1);
    const child = parent.next;
    parent.next = node;
    node.next = child;
    return ++this.#size;
  }

  removeAt(index) {
    if (index < 0 || index >= this.#size) {
      throw new RangeError('Provided index is out of list bounds');
    }
    --this.#size;
    if (index === 0) {
      const node = this.#head;
      this.#head = node.next;
      return node;
    }
    const parent = this.at(index - 1);
    const node = parent.next;
    const child = node.next;
    parent.next = child;
    return node;
  }

  toString() {
    let output = '';
    let node = this.#head;
    while (node) {
      output += `( ${node.value} ) -> `;
      node = node.next;
    }
    output += 'null';
    return output;
  }
}
