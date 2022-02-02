const fs = require('fs');
let BSTNode = require("./bst.js");
let Item = require("./item.js");
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
function processLineByLine() {
	require('fs').readFileSync('data/inventory.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
	  line = JSON.parse(line)
	  let item = new Item(line.name)
	  item.stock = 0
	  item.price = line.cost 
	  item.price = parseFloat((item.price).substring(1))
	  let removedNode = BST.remove(item)
	  if(removedNode !== null) {
		item.price = Math.round((removedNode.price + item.price) / 2 * 100) / 100
		item.stock += removedNode.stock + line.stock
	  }
	  BST.add(item)
	})

  }
  processLineByLine()
  
  let inOrderTransversal = BST.inOrder()
  //writing jsons to new text file
  function writeToTextFile(arrayToWrite) {
	let stream = fs.createWriteStream("data/storeData.txt");
	stream.once('open', function(fd) {
	  for(let i = 0; i < arrayToWrite.length; i++) {
		require('fs').writeFileSync('data/storeData.txt', JSON.stringify(arrayToWrite[i]) + '\n', {
			flag: 'a+',
		
		});
	  }
	let uniqueItems = arrayToWrite.length.toString();
	stream.write('Number of Unique Items: ' +  uniqueItems);
});
	
}
  writeToTextFile(inOrderTransversal)
  