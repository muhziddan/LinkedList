class MyNode {
    constructor(value) {
        
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = new MyNode(value)
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new MyNode(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
            return this
        } else if (index < 0 || index > this.length - 1) {
            console.log("index out of bonds")
            return "index out of bonds"
        } else if (typeof index !== "number") {
            console.log(undefined)
            return undefined
        }

        const leadNode = this.traverse(index - 1)
        const destination = leadNode.next
        const newNode = new MyNode(value)

        newNode.next = destination
        leadNode.next = newNode
        newNode.prev = leadNode
        destination.prev = newNode
        this.length++
        return this
    }

    traverse(index) {
        let counterHead = 0
        let counterTail = this.length - 1
        let currentNodeHead = this.head
        let currentNodeTail = this.tail
        const halfOfTotalIndex = (counterTail) / 2

        if (index <= halfOfTotalIndex) {
            while (counterHead < index) {
                currentNodeHead = currentNodeHead.next
                counterHead++
            }
            return currentNodeHead
        } else {
            while (counterTail > index) {
                currentNodeTail = currentNodeTail.prev
                counterTail--
            }
            return currentNodeTail
        }
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

const newLinkedList = new DoublyLinkedList(30)
newLinkedList.append(25)
newLinkedList.append(100)
newLinkedList.prepend(1)
newLinkedList.insert(1.2, 777)
console.log(newLinkedList.printLinkedListArray())
// console.log(newLinkedList.head.next)

// node DoublyLinkedList.js
