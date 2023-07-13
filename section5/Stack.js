class Storage {
    constructor() {
        this.array = [];
        this.count = 0;
    }
}

class Stack extends Storage {
    push(data) {
        this.count++;
        this.array.push(data);
    }

    pop() {
        if (this.count <= 0) throw new Error('Stack is Empty');
        const data = this.array.splice(this.count - 1, 1)[0];
        this.count--;
        return data;
    }

    peek() {
        if (this.count <= 0) throw new Error('Stack is Empty');
        return this.array[this.count - 1];
    }
}