class BST {
    #root;
    #comparator;
    static BSTNode = class {
        #data;
        #left;
        #right;

        constructor(data){
            //data element
            this.#data = data;
            //left and right nodes
            this.#left = null;
            this.#right = null;
        }
    }


   // comparator must be a function(a,b)
   // which returns:
   // < 0 if a < b
   // = 0 if a == b
   // > 0 if a > b
   #comparator = function(a,b){
      throw 'comparator not defined!';
   }
  constructor(comparator) {
      this.#root = null;
      if(#comparator !== null){
         this.#comparator = comparator;
     
      }
     
  }
  

  /**
   * Adding a node to the bst
   **/
  add(data) {
      
     
     
      if(data == null || data == ""){
          return -1
      }
      let n = new BST.BSTNode(data)
      let current = this.#root
      if (current == null) { //BST is empty
          this.#root = n //points head to n
          
      }
      else{
           let prev = null
               
           while(current != null){
                   
                   if( this.#comparator(data, current.data) <= 0 ){
                       prev = current
                       current = current.left;
                        
                   }
                   else{
                       prev = current
                       current = current.right
                     
                   }
           }
         
         
          
           if (isNaN(parseFloat(data)) && isNaN(parseFloat(this.#root.data)) || !isNaN(parseFloat(data)) && !isNaN(parseFloat(this.#root.data))){
               
               if (this.#comparator(data, prev.data) <= 0 ){       
                   prev.left = n
                   return 0;
               }
               else{
                   prev.right = n;
                   return 0;
               }
           }
           else{
               return 1;
           }
         
      }
  }
   /**
   * Removing a node
   **/
  remove( data) {
      if (data == null){
          return
      }
      let curr = this.#root
      let prev = curr
      let data_num = data

     
      while(curr.data != data_num){
          
          if(curr.left == null && curr.right == null && curr.data !=  data_num){
              return false
          }
          if (this.#comparator(data_num, curr.data) <= 0){
              prev = curr
              curr = curr.left
          }
          else{
              prev = curr
              curr = curr.right
          }

          
          if(curr == null){
              return false
          }
      }
      let children_num = 0
      if(curr.left != null){
          children_num++
      }
      if(curr.right != null){
          children_num++

      }
     
      if(children_num == 1){
     
          if(curr == this.#root){
              if(curr.left != null){
                  this.#root = curr.left
              }else{
                  this.#root = curr.right
              }
          }
           
          if(this.#comparator(data_num, prev.data) > 0){
              if(curr.right != null){
                  prev.right = curr.right
              }else{
                  prev.right = curr.left
              }
          } else{
              if(curr.left != null){
                  prev.left = curr.left
              }else{
                  prev.left = curr.right
              }
          }
          return data_num
      }
      //Deleting a leaf node
      if(children_num == 0){
          if(curr == this.#root){
              this.#root = null
          }
          //Have to use parsefloat because of some weird bug happening here when attempting to remove 10 from the tree
          if(this.#comparator(curr.data, prev.data) > 0){
              prev.right = null
          }else{
              prev.left = null
          }
          return data
      }
     
     
      let tempNode = curr;
      prev = curr
     
      //going to the left once and then to the right to find what node to replace it
      if (curr.left != null){
          curr = curr.left;
      }
      while (curr.right != null){
          prev = curr
          curr = curr.right;
      }

      //Moving that leaf node data up to where the data resided previously
      tempNode.data = curr.data;
      //deleting the leaf node
      if(prev == tempNode){
          prev.left = null
      } else{
          prev.right = null
      }
     
      return tempNode.data
  }
/**
   * The number of leaf nodes if it were a perfect bst
   **/

  width(){
      return Math.pow(2, this.height() - 1)
  }
   /**
   * the height of the tree
   **/
  height(){
      if(this.#root == null){
          return 0;
      }
      return this.heightHelper(this.#root)
  }
  /**
   * finding the max height of the right and left branches
   **/
  heightHelper(bstNode){
      if(bstNode == null){
          return 0
      }
      let left = this.heightHelper(bstNode.left)
      let right = this.heightHelper(bstNode.right)
     
      if(left > right){
           let max = left
           return max+1
      }else{
           let max = right
           return max+1
      }
  }

  /*
  *in order traversal
  */
  
  inOrder() {
      
      let inOrderHelper = function (n, curr){
          if(n == null){
              return;
          }
          inOrderHelper(n.left, curr);
          curr.push(n.data);
          inOrderHelper(n.right, curr);
      }
      let rtn = [ ];
      inOrderHelper(this.#root, rtn);
      return rtn;
  }
 
  #removeNode( node ) { }
#findNode( data ) {}
}