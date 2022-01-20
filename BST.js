export default class BST {
    #root;
    #comparator;
    static BSTNode = class {
    
        constructor(data){
            //data element
            this.#data = data;
            //left and right nodes
            this.#left = null;
            this.#right = null;
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
      if(#comparator !== null){
         this.#comparator = comparator;
     
      }
     
  }
  

  /**
   * Adding a node to the bst
   **/
  add(data) {
      const Node = BST.BSTNode(data);
     
     
      
  }
   /**
   * Removing a node
   **/
  remove( data) {
      
  }

  /*
  *in order traversal
  */
  
  inOrder() {
    const rtnList = [];
    const inOrderHelper = (node) => {
        if (node?.left) inOrderHelper(node.left);
        if (node) rtnList.push(node.data);
        if (node?.right) inOrderHelper(node.right);
    };
    inOrderHelper(this.root);
    return rtnList;
      
      
  }
 
  
}