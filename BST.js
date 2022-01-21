export default class BST {
  
    static BSTNode = class {
    
        constructor(data){
            //data element
            this.data = data;
            //left and right nodes
            this.left = null;
            this.right = null;
        }
        getData(){
            return this.data;
        }
        
    };
    #root = null;


   // comparator must be a function(a,b)
   // which returns:
   // < 0 if a < b
   // = 0 if a == b
   // > 0 if a > b
   #comparator = function(a,b){
      throw 'comparator not defined!';
   }
  constructor(comparator) {
      this.root = null;
      
     
      }
     
  
  

  /**
   * Adding a node to the bst
   **/
  add(data) {
      const node = new BST.BSTNode(data);
      const addHelper = (currNode, newNode) => {
        if (this.#comparator(currNode.getData().name, newNode.getData().name) === 1) {
            if (currNode.left === null) currNode.left = newNode;
            else addHelper(currNode.left, newNode);
        } else {
            if (currNode.right === null) currNode.right = newNode;
            else addHelper(currNode.right, newNode);
        }
    };
    if (this.root === null) this.root = node;
    else addHelper(this.root, node);
}

      
  
   /**
   * Removing a node from BST
   **/
  remove( data) {
      
  }

  /*
  *in order traversal
  */
  /*bilal helped with this*/
  inOrder() {
    const rList = [];
    const inOrderHelper = (node) => {
        if (node?.left) inOrderHelper(node.left);
        if (node) rList.push(node.data);
        if (node?.right) inOrderHelper(node.right);
    };
    inOrderHelper(this.root);
    return rList;
      
      
  }
 
  
}