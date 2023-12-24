import Node from "./listNode";

class LinkedList{
    constructor(){
        this.head = null;
    }

    append(data){
        if(this.head === null){
            this.head = new Node(data);
        }
        else{
            if(this.head.nextNode === null){
                this.head.nextNode = new Node(data);
            }
            else{
                let tmp = this.head;
                while(tmp.nextNode != null){
                    tmp = tmp.nextNode;
                }
                tmp.nextNode = new Node(data);
            }
        }
    }
    prepend(data){
        if(this.head != null){
            let tmp = new Node(data);
            let currHead = this.head;
            this.head = tmp;
            tmp.nextNode = currHead;
            
        }else{
            this.head = new Node(data);
        }
    }
    size(){
        let count = 1;
        if(this.head != null){
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                count++;
            }
        }
        return count;
    }
    head(){
        if(this.head != null){
            return this.head;
        }
        else{
            throw new Error('List is empty');
        }
    }
    tail(){
        if(this.head != null){
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            return tmp;
        }
        else{
            throw new Error('List is empty');
        }
    }
    at(index){
        const listSize = this.size();
        if(index >= listSize){
            throw new Error('Invalid Index');
        }
        else{
            let iterator = 0;
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                iterator++;
                if(iterator === index){
                    return tmp;
                }
            }
        }
    }
    pop(){
        if(this.head === null){
            throw new Error('List is empty');
        }
        else{
            const listSize = list.size();
            let iterator = 0;
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                iterator++;
                if(iterator === listSize - 2){
                    tmp.nextNode = null;
                }
            }
        }
    }
    contains(data){
        if(this.head === null){
            throw new Error('List is empty');
        }
        else{
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                if(tmp.value === data){
                    return true;
                }
            }
            return false;
        }
    }
    find(data){
        if(this.head === null){
            throw new Error('List is empty');
        }
        else{
            let index = 0;
            let tmp = this.head;
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                index++;
                if(tmp.value === data){
                    return index;
                }
            }
            return null;
        }
    }
    toString(){
        if(this.head === null){
            throw new Error('List is empty');
        }
        else{
            let listSize = list.size();
            let iterator = 0
            let tmp = this.head;
            let stringList = `(${tmp.value})`
            while(tmp.nextNode != null){
                tmp = tmp.nextNode;
                iterator++;
                stringList += ` --> (${tmp.value})`;
                if(iterator === listSize - 1){
                    stringList += ` --> (Null)`;
                }
            }
            return stringList;
        }
    }

}