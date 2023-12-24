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

}