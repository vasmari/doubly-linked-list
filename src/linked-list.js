const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if(!this._head){
            this._head = node;
            this._tail = node;
        }else{
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }

        this.length++;
        return this; 
    }

    head() {
        if (!this._head) {
            return null;
        } else {
        return  this._head.data;
        }
    }

    tail() {
        if (!this._head) {
            return null;
        } else {
        return  this._tail.data;
        }
        
    }

    at(index) {
        let currentNode = this._head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
    
        return currentNode.data;
    }

    insertAt(index, data) {
        console.log ("1 ", this);
        let node = new Node(data);
        if(this.length == 0) {
            this._head = node;
            this._tail = node;
          }else{
                let current = this._head;
                let counter = 1;
                
                
                if( index == 0 ) {
                    this._head.prev = node;
                    node.next = this.head;
                    this.head = node;
                } else {
                    while(current) {
                    current = current.next;
                    if( counter == index ) {
                        node.prev = current.prev;
                        current.prev.next = node;
                        node.next = current;
                        current.prev = node;
                    }
                    counter++
                    }
                }
            
        }
        console.log (this);
        this.length++;
            return this; 
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        console.log (this.length);
        return this; 
    }

    deleteAt(index) {
        let current = this._head;
        let counter = 1;
        if( index == 0 ) {
        this._head = this._head.next;
        //this._head.prev = null;
        } else {
        while( current ) {
            current = current.next
            if ( current == this._tail ) {
                this._tail = this._tail.prev;
                this._tail.next = null;
            } else if( counter == index ) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                break;
            }
            counter++;
        }
        }
        this.length--;
        return this; 
    }

    reverse() {
        let current = this._head;
        let prev = null;
        while( current ){
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;
        return this; 
        
    }

    indexOf(data) {
        let currentNode = this._head;
        let count = 0;
        let indexOfValue = -1;
        while (count < this.length) {
            if (currentNode.data == data) {
                indexOfValue = count;
            } 
            currentNode = currentNode.next;
            count++;
        }
    
        return indexOfValue;
    }
}

module.exports = LinkedList;
