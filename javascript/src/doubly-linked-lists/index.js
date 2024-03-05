const ListNode = function (val, next, prev) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.prev = prev === undefined ? null : prev;
};

const DoublyLinkedList = function () {
  this.head = null;
  this.tail = null;
};

// append at the end
DoublyLinkedList.prototype.append = function (data) {
  const newNode = new ListNode(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// append node at specified index
DoublyLinkedList.prototype.appendAt = function (index, data) {
  if (index < 0) {
    return;
  }

  const newNode = new ListNode(data);

  // case: insert at the beginning
  if (index === 0) {
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return;
  }

  // find the node just before the specified index
  let current = this.head;
  let i = 0;

  while (i < index - 1 && current != null) {
    current = current.next;
    i++;
  }

  if (current != null) {
    // Set the next pointer of the new node to the node after the current node
    newNode.next = current.next;

    // Set the previous pointer of the new node to the current node
    newNode.prev = current;

    // Check if there is a node after the current node
    if (current.next) {
      // If yes, update the previous pointer of the node after the current node
      current.next.prev = newNode;
    } else {
      // If inserting at the end, update the tail to the new node
      this.tail = newNode;
    }

    // Update the next pointer of the current node to the new node
    current.next = newNode;
  }
};

// remove the last node
DoublyLinkedList.prototype.remove = function () {
  if (this.head == null) {
    return;
  }

  // If there is only one node in the list, set both head and tail to null
  if (this.head.next == null) {
    this.head = null;
    this.tail = null;
    return;
  }

  this.tail = this.tail.prev;
  this.tail.next = null;
};

// remove at specified index
DoublyLinkedList.prototype.removeAt = function (index) {
  if (index < 0 || this.head == null) {
    return; // invalid index or empty list
  }

  // Remove the head node
  if (index === 0) {
    this.head = this.head.next;

    if (this.head == null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    return;
  }

  let current = this.head;
  let i = 0;

  // Traverse the list to the node at the specified index
  while (i < index && current != null) {
    current = current.next;
    i++;
  }

  // If the node is found, adjust pointers to remove it
  if (current != null) {
    // Update the next pointer of the previous node
    current.prev.next = current.next;

    // Update the prev pointer of the next node
    if (current.next != null) {
      current.next.prev = current.prev;
    } else {
      // If removing the last node, update the tail
      this.tail = current.prev;
    }
  }
};

DoublyLinkedList.prototype.printForward = function () {
  let current = this.head;
  let result = "";

  while (current) {
    result += current.val;
    current = current.next;
    if (current) {
      result += "<->";
    }
  }

  console.log(result);
};

DoublyLinkedList.prototype.printBackward = function () {
  let current = this.tail;
  let result = "";

  while (current) {
    result += current.val;
    current = current.prev;
    if (current) {
      result += "<->";
    }
  }

  console.log(result);
};

module.exports = { DoublyLinkedList, ListNode };
