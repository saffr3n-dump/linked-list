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
}
