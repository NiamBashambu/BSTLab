const fs = require('fs');
//getting the BST and Item classes
let BSTNode = require("./bst.js");
let Item = require("./item.js");

//creates BST, which will store all the items
let BST = new BSTNode(function(a,b){
	if(a.name > b.name) {
	  return 1
	} else if(a.name < b.name) {
	  return -1
	} else if(a.name === b.name) {
	  return 0
	}
  })
 
  
  

//removing duplicate items and adding the stock and price to one version of the item
//checks for null and such
function processLineByLine() {
	require('fs').readFileSync('data/inventory.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
	  line = JSON.parse(line)
	  let item = new Item(line.name)
	  item.stock = 0
	  item.price = line.cost 
	  item.price =  parseFloat((item.price).substring(1))
	  
	  let removedNode = BST.remove(item)
	  if(removedNode !== null) {
		item.price = (Math.round((removedNode.price + item.price) / 2 * 100) / 100 )
		
		console.log(item.price)
		item.stock += removedNode.stock + line.stock
	  }
	  BST.add(item)
	  
	})

  }
  processLineByLine()
  //writing the inorder items tp the json
  let inOrderT = BST.inOrder()
  
  function writeToTextFile(arrayToWrite) {
	let file = fs.createWriteStream("data/storeData.txt");
	let uniqueItems = arrayToWrite.length.toString();
	
	file.once('open', function(fd) {
		file.write('Number of Unique Items: ' + uniqueItems);
		file.write('\n');
		
	  for(let i = 0; i < arrayToWrite.length; i++) {
		

		
		require('fs').writeFileSync('data/storeData.txt',JSON.stringify(arrayToWrite[i]) + '\n', {
			flag: 'a+',
			
		
		});
		
		
	  }
	  
	  
	 
	
	
});
	
}
  writeToTextFile(inOrderT)
  