"use-strict"

const node1 = {
    prev: null,
    next: null,
    data: "A"
}

class LinkedList {
    constructor() {
        // test-code: change later
        this.head = node1;
        this.tail = node1;
        this.size = 1;
    }
}

const linkedList = new LinkedList();


const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "E"
}



// ----------- LINKEDLIST METHODS --------------

const printListData = () => {
    if (linkedList.size === 0) {
        console.log("Empty list");
        return
    }

    if (linkedList.size === 1) {
        console.log("POINTERS DATA size 1: ", linkedList.head.data);
        return
    }

    let pointer = linkedList.head;

    while (pointer !== null) {
        console.log(`POINTER DATA (SIZE ${linkedList.size}): `, pointer.data);
        pointer = pointer.next;
    }
}

const add = (payload) => {
    if (linkedList.size === 0) {
        linkedList.head = payload;
        linkedList.tail = payload;
    } else {
        linkedList.tail.next = payload;
        payload.prev = linkedList.tail;
        linkedList.tail = payload;
    }
    linkedList.size++;
}

// add(node2);
// add(node3);
// add({
//     prev: null,
//     next: null,
//     data: "jajaj"
// })
// printList();


// ----------------------- ADDING LAST -----------------
const addLast = (payload) => {
    add(payload);
}

// add({
//     prev: null,
//     next: null,
//     data: "jojo"
// });
// add({
//     prev: null,
//     next: null,
//     data: "jaja"
// });
// add({
//     prev: null,
//     next: null,
//     data: "nejnej"
// });
// printListData();


// ----------------------- ADDING FIRST -----------------
const addFirst = (payload) => {
    if (linkedList.size === 0) {
        linkedList.head = payload;
        linkedList.tail = payload;
    } else {
        payload.next = linkedList.head;
        linkedList.head = payload;
    }
    linkedList.size++;
}

// addFirst({
//     prev: null,
//     next: null,
//     data: "nejnej"
// }); 
// addFirst({
//     prev: null,
//     next: null,
//     data: "THIRD"
// });
// addFirst({
//     prev: null,
//     next: null,
//     data: "SECOND"
// });
// addFirst({
//     prev: null,
//     next: null,
//     data: "FIRST"
// });

// printListData();


// ----------------------- CLEAR -----------------
const clear = () => {
    if (linkedList.size === 0) return;

    let currentNode = linkedList.head;

    while (currentNode != null) {
        const nextNode = currentNode.next;
        currentNode.next = null;
        currentNode.prev = null;
        currentNode = nextNode;
    }
    linkedList.head = null;
    linkedList.tail = null;
    //linkedList.size = 0;
}
// printListData();
// clear();
// printListData()


// ----------------------- GET -----------------
const get = (index) => {
    if (linkedList.size === 0) return;

    let counter = 0;
    let pointer = linkedList.head;
    while (pointer != null) {
        if (index === counter) return pointer;

        pointer = pointer.next;
        counter++;
    }
}

// addFirst({
//     prev: null,
//     next: null,
//     data: "SECOND"
// });
// addFirst({
//     prev: null,
//     next: null,
//     data: "FIRST"
// });
// console.log(get(0).data);
// console.log(get(1).data);
// console.log(get(2).data);



// ----------------------- INDEX OF -----------------

const indexOf = (payload) => {
    if (linkedList.size === 0) return;

    let counter = 0;
    let currentNode = linkedList.head;
    while (currentNode !== null) {
        if (currentNode.data === payload.data) return counter;

        counter++;
        currentNode = currentNode.next;
    }
}

// addFirst({
//     prev: null,
//     next: null,
//     data: "SECOND"
// });
// addFirst({
//     prev: null,
//     next: null,
//     data: "FIRST"
// });
// console.log(indexOf({ prev: null, next: null, data: "FIRST" }));
// console.log(indexOf({ prev: null, next: null, data: "SECOND" }));
// console.log(indexOf({ prev: null, next: null, data: "A" }));


// ----------------------- INSERT AFTER -----------------
const insertAfter = ( index, payload ) => {
    if (index > linkedList.size - 1) return;

    if (linkedList.size === 0) {
        linkedList.head = payload;
        linkedList.tail = payload;
        linkedList.size++;
    } else {
        
        let counter = 0;
        let currentNode = linkedList.head;
        
        while(currentNode !== null) {        

            if (index === counter) {
                payload.next = currentNode.next;
                payload.prev = currentNode;
                currentNode.next = payload;
                
                if (linkedList.size === counter + 1) linkedList.tail = payload;
                
                linkedList.size++;
                return;
            }

            counter++;
            currentNode = currentNode.next;
        }
    }    
}

// insertAfter(0, {
//     prev: null,
//     next: null,
//     data: "SECOND"
// });
// insertAfter(0, {
//     prev: null,
//     next: null,
//     data: "FIRST"
// });
// printListData();



// ----------------------- INSERT BEFORE -----------------

const insertBefore = ( index, payload ) => {
    if (index < 0 || index > linkedList.size - 1) return;

    if (linkedList.size === 0) {
        linkedList.head = payload;
        linkedList.tail = payload;
        linkedList.size++;        
    } else {
        
        let counter = 0;
        let currentNode = linkedList.head;        
        while(currentNode !== null) {        
            
            if (index === counter) {
                payload.next = currentNode;
                payload.prev = currentNode.prev;   

                if (currentNode.prev === null) {                    
                    linkedList.head = payload;
                }else {
                    currentNode.prev.next = payload;
                }

                currentNode.prev = payload;
                
                linkedList.size++;
                return;
            }

            counter++;
            currentNode = currentNode.next;
        }
    } 
}

insertBefore(0, {
    prev: null,
    next: null,
    data: "SECOND"
});
insertBefore(1, {
    prev: null,
    next: null,
    data: "FIRST"
});
insertBefore(2, {
    prev: null,
    next: null,
    data: "SOMETHING"
});
printListData();

// ----------------------- REMOVE -----------------

const remove = () => {
    if (linkedList.size === 0) return;

    let currentNode = linkedList.head;
    while (currentNode !== null) {


        currentNode = currentNode.next;
    }

    linkedList.size--;
}