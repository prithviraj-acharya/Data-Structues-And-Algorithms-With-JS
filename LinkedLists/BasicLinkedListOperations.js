class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 5;
  }

  //Insert 1first node
  inserAtfirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last Node
  insertLastNode(data) {
    let node = new Node(data);
    let current = this.head;

    if (!current) {
      this.head = node;
    } else {
      while (current.next) {
        current = current.next;
      }

      current.next = new Node(data);
    }

    this.size++;
  }

  //Insert at an index
  insertAtIdx(data, idx) {
    //check for out of range
    if (idx > 0 && idx > this.size) return;

    // If the index is 0

    if (idx === 0) return this.inserAtfirst(data);

    let node = new Node(data);
    let count = 0;
    let current = this.head,
      prev;

    while (count < idx) {
      prev = current;
      count++;
      current = current.next;
    }

    node.next = current;
    prev.next = node;
  }

  //Get at index
  getAt(idx) {
    //check for out of range

    if (idx > 0 && idx > this.size) return;

    if (idx === 0) return this.head.data;

    let count = 0;
    let current = this.head;

    while (count < idx) {
      current = current.next;
      count++;
    }
    return current.data;
  }

  //Remove at indexOf
  removeAtIndex(idx) {
    //check for out of range
    if (idx > 0 && idx > this.size) return;

    // If the index is 0
    let current = this.head;

    if (idx === 0) {
      this.head = current.next;
      return current.data;
    }

    let count = 0;
    let prev;

    while (count < idx) {
      prev = current;
      count++;
      current = current.next;
    }

    prev.next = current.next;

    return current.data;
  }

  //clear the LinkedList
  clearLL() {
    this.head = null;
    this.size = 0;
  }

  //print last data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);

      current = current.next;
    }
  }

  returnLinkListFromArr(arr) {
    for (let i = 0; i < arr.length; i++) {
      this.insertAtIdx(arr[i], i);
    }

    console.log(JSON.stringify(this.head));
  }
}

let ll = new LinkedList();
ll.returnLinkListFromArr([1, 2, 3, 4, 5]);

// ll.inserAtfirst(100);
// ll.inserAtfirst(200);
// ll.inserAtfirst(300);

// ll.insertLastNode(500);

// ll.insertAtIdx(700, 0);
// ll.insertAtIdx(700, 2);

// console.log(ll.getAt(2));

// console.log(ll);

// console.log('Removed: ' + ll.removeAtIndex(2));
// ll.clearLL();

//ll.printListData();
// console.log(ll);
