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
      
   }
  constructor(comparator) {
      this.root = null;
      
     
      }
     
  
  

  /**
   * Adding a node to the bst
   **/
  add(data) {
      const node = new BST.BSTNode(data);
      const addHelper = (currentN, newN) => {
        if (this.root === null) this.root = node;
        else addHelper(this.root, node);
    


        if (this.#comparator(currentN.getData().name, newN.getData().name) === 1) {
            if (currentN.left === null) currentN.left = newN;
            else addHelper(currentN.left, newN);
        } else {
            if (currentN.right === null) currentN.right = newN;
            else addHelper(currentN.right, newN);
        }
    }
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