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

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }
}
