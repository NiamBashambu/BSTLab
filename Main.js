import { readFileSync, writeFileSync } from 'fs';
import BST from './BST.js';

export const getInventory = () =>
	readFileSync('data/inventory.txt', { encoding: 'utf-8' }).split('\n');

export const comparatorFunction = (a, b) => String(a).localeCompare(String(b));
// add const statements



let lines = readFileSync('data/inventory.txt', { encoding: 'utf-8' }).split('\n');

let bst = new BST(comparatorFunction);

for (let i = 0; i < lines.length; i++) {
	lines[i] = JSON.parse(lines[i]);
	bst.add(lines[i]);
}

let inOrderLines = bst.inOrder();

for (const line of inOrderLines)
	writeFileSync('data/storeData.txt', JSON.stringify(line) + '\n', {
		flag: 'a+',
	});