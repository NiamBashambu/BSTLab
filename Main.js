import { readFileSync, writeFileSync } from 'fs';
import BST from './BST.js';

export const getInventory = () =>
	readFileSync('data/inventory.txt', { encoding: 'utf-8' }).split('\n');

export const comparator = (a, b) => 
	String(a).localeCompare(String(b));
// add const statements



let lines = readFileSync('data/inventory.txt', { encoding: 'utf-8' }).split('\n');

let bst = new BST(comparator);
for (let i = 0; i < lines.length; i++) {
	lines[i] = JSON.parse(lines[i]);
	bst.add(lines[i]);
}
let linesinOrder = bst.inOrder();


for (let i = 0; i < lines.length; i++) {
	writeFileSync('data/storeData.txt', JSON.stringify(lines[i]) + '\n', {
		flag: 'a+',
	});
}