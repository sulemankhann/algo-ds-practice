const ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const LinkedList = function () {
  this.head = null;
  this.tail = null;
};

// append at the end
LinkedList.prototype.append = function (data) {
  const newNode = new ListNode(data);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

// append node at specified index
LinkedList.prototype.appendAt = function (index, data) {
  if (index < 0) {
    return;
  }

  const newNode = new ListNode(data);

  // case: insert at the beginning
  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;

    //update the tail if the list was empty
    if (this.tail == null) {
      this.tail = newNode;
    }
    return;
  }

  let current = this.head;
  let i = 0;

  // find the node just before the specified index
  const nodeBeforeIndex = this.findNodeBeforeIndex(index);

  // if node found, insert the new one
  if (nodeBeforeIndex != null) {
    newNode.next = nodeBeforeIndex.next;
    nodeBeforeIndex.next = newNode;

    // update the tail, if the new node is added at the end

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }
};

// remove the last node
LinkedList.prototype.remove = function () {
  if (this.head == null) {
    return;
  }

  // If there is only one node in the list, set both head and tail to null
  if (this.head.next == null) {
    this.head = null;
    this.tail = null;
    return;
  }

  let current = this.head;

  // Traverse the list to find the last and second-to-last nodes
  while (current.next != null && current.next !== this.tail) {
    current = current.next;
  }

  // Update the tail to the second-to-last node
  this.tail = current;

  // Remove the last node
  this.tail.next = null;
};

// remove at specified index
LinkedList.prototype.removeAt = function (index) {
  if (index < 0 || this.head == null) {
    return; // invalid index or empty list
  }

  // Remove the head node
  if (index === 0) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  let i = 0;

  // find the node just before the specified index
  const nodeBeforeIndex = this.findNodeBeforeIndex(index);

  // If the node is found, adjust pointers to remove it
  if (nodeBeforeIndex != null && nodeBeforeIndex.next != null) {
    nodeBeforeIndex.next = nodeBeforeIndex.next.next;
  }
};

// Helper function to find the node just before the specified index
LinkedList.prototype.findNodeBeforeIndex = function (index) {
  let current = this.head;
  let i = 0;

  while (i < index - 1 && current != null) {
    current = current.next;
    i++;
  }

  return current;
};

// Helper function to print the list
LinkedList.prototype.print = function (data) {
  let current = this.head;
  let msg = "";

  while (current) {
    msg += current.val;
    current = current.next;

    msg += current ? "->" : "";
  }

  console.log(msg);
};

module.exports = LinkedList;
