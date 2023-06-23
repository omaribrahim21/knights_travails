console.log('hello');

function node(x,y){
    this.x = x;
    this.y = y;
    this.one = null;
    this.two = null;
    this.three = null;
    this.four = null;
    this.five = null;
    this.six = null;
    this.seven = null;
    this.eight = null;
}

class octoTree {
    constructor(){
        this.head = null;
    }

    add(x,y){
        if (this.head == null){
            this.head = node(x,y);
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
        preOrder(head.two, newNode);
        preOrder(head.three, newNode);
        preOrder(head.four, newNode);
        preOrder(head.five, newNode);
        preOrder(head.six, newNode);
        preOrder(head.seven, newNode);
        preOrder(head.eight, newNode);
    }
    return false;
}
