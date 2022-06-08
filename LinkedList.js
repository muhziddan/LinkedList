// let obj1 = { 'a': true };
// let obj2 = obj1;
// obj1.a = 'lol'
// delete obj1
// // console.log('1' + obj1.a)
// console.log('2' + obj2.a)

// // node LinkedList.js

// let linkedList = {
//     head: {
//         'value': 5,
//         'next': {
//             'value': 10,
//             'next': null
//         }
//     }
// }

class MyNode {// to reduce boiler code, bcz in most of every method in linked list is making a new node
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        // making the first node/head
        this.head = {
            value: value,
            next: null
        }
        // since it was the first, the tail will also be the head
        this.tail = this.head
        this.length = 1
    }

    append(value) {// add new node to the tail
        //instantiate new node
        const newNode = new MyNode(value)
        // add the new node to the next parameter in the last tail stored
        this.tail.next = newNode
        // update the tail to be the new/latest tail
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {// add new value to the head
        // instantiate the new node
        const newNode = new MyNode(value)
        // making the next parameter in the new node equal to the last head
        newNode.next = this.head
        // udpate the head to the new node
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {// add new node in a specific index
        if (index === 0) {
            this.prepend(value)
            return this
        } else if (index < 0 || index > this.length - 1) {
            console.log("index out of bonds")
            return "index out of bonds"
        }
        // iterate/traverse until one step before reaching the destination index
        const leadNode = this.traverseToIndex(index - 1)
        // reference the node in the destination index before changing
        const destination = leadNode.next
        // create new Node
        let newNode = new MyNode(value)
        // making the next parameter in the new node equal to the node in the destination index
        // -> connecting the new node to the destination index node
        newNode.next = destination
        // making the next parameter in the node prior to the destination index equal to the new node
        // connecting the node prior to the destination node to the new node
        leadNode.next = newNode
        this.length++
        return this
    }

    delete(index) {
        if (index === 0) {
            this.head = this.head.next
            this.length--
            return this
        } else if (index < 0 || index > this.length - 1) {
            console.log("Index out of bonds")
            return "Index out of bonds"
        }

        const leadNode = this.traverseToIndex(index - 1)
        if (index === this.length - 1) {
            leadNode.next = null
            this.tail = leadNode
            this.length--
            return this
        }
        const destinationNode = leadNode.next
        leadNode.next = destinationNode.next
        this.length--
        return this
    }

    reverseList() {// O(n) , space O(n)
        if (this.length === 1) {
            return this
        }

        const valueHolder = []
        let currentNode = this.head
        let newNode = this.head
        while (currentNode !== null) {
            valueHolder.push(currentNode.value)
            currentNode = currentNode.next
        }

        for (let i = valueHolder.length - 1; i >= 0; i--) {
            newNode.value = valueHolder[i]
            newNode = newNode.next
        }

        return this
    }

    reverse() {// O(n), space O(1)
        if (this.length === 1) {
            return this
        }

        let newHead = this.head
        let helper = newHead.next
        this.tail = this.head

        while(helper) {
            const nextNode = helper.next
            helper.next = newHead
            newHead = helper
            helper = nextNode
        }

        this.head.next = null
        this.head = newHead

        return this
    }

    traverseToIndex(index) {// the iterate/traverse function to the node
        let counter = 0
        let currentNode = this.head
        while (counter < index) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    printLinkedListArray() {// use to check if the above methode is running in the right direction
        const arrayResult = []
        let currentNode = this.head
        while (currentNode !== null) {
            arrayResult.push(currentNode.value)
            currentNode = currentNode.next
        }
        return arrayResult
    }
}

const myLinkedList = new LinkedList(100)
myLinkedList.append(50)
myLinkedList.append(35)
myLinkedList.append(40)
myLinkedList.prepend(11)
// myLinkedList.insert(2, 77)
// myLinkedList.insert(0, 123)
myLinkedList.delete(4)
myLinkedList.delete(3)
// myLinkedList.delete(2)

console.log(myLinkedList.length)
// myLinkedList.insert(7, 999)
// console.log(myLinkedList.tail)
console.log(myLinkedList.printLinkedListArray())
// myLinkedList.reverseList()
myLinkedList.reverse()
console.log(myLinkedList.printLinkedListArray())

// node LinkedList.js
