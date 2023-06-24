console.log('hello');

function node(x,y){
    this.x = x;
    this.y = y;
    this.array = null;
}

class arrayTree {
    constructor(){
        this.head = null;
    }

    add(x,y){
        var array1 = [];
        if (this.head == null){
            newNode = new node(x,y);
            array1.push(newNode);
            this.head = array1;
            return;
        }
        else if (preOrder(this.head, newNode)){ //need to find if any ancestors have same data, if return true then we dont add this data
            return;
        }
        else {//else we add the data
            
        }
    }
}

//right here will be code that keeps adding different moves based on the initial position untill preOrder returns true

function preOrder(head, newNode){
    if (head == null){ //check if head node is null and contains data , if not proceed, if yes return true
        if ((head.x == newNode.x) && (head.y == newNode.y)){
            return true;
        }
        return false;
    }
    else { //if head node doesnt heave 
        if ((head.x == newNode.x) && (head.y == newNode.y)){
            return true;
        }
        arrayLength = head.length;
        for (var i = 0; i < arrayLength; i++){
            preOrder(head.array[i], newNode);
            if ((head.array[i].x = newNode.x) && (head.array[i].y = newNode.y)){
                return true;
            }
        }
    }
    return false;
}
