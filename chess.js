console.log('hello');

function node(x,y){
    this.x = x;
    this.y = y;
    this.array = null;
}

class octoTree {
    constructor(){
        this.head = null;
    }

    add(x,y){
        var array1 = [];
        if (this.head == null){
            array1.push(node(x,y));
            this.head = array1;
        }
        else if (traversal(this.head, node(x,y))){ //need to find if any ancestors have same data, if return true then we dont add this data
            return;
        }
        else {
            
        }

    }
}

function preOrder(head, newNode){
    if (node != null){
        if ((head.x == newNode.x) && (head.y == newNode.y)){
            return true;
        }
    }
    else {
        preOrder(head.one, newNode);
    }
    return false;
}
