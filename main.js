// main.js
import { LinkedList } from './LinkedList.js';

const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
console.log(list.size()); 
console.log(list.head().value); 
console.log(list.tail().value); 
console.log(list.at(1).value); 
list.pop();
console.log(list.contains(2));
console.log(list.find(1));
console.log(list.toString());
list.insertAt(3, 1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
