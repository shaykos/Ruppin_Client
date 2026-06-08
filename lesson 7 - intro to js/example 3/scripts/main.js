import { add, sum } from './functions.js';

let x = Number(prompt("הזן מספר ראשון"));
let y = Number(prompt("הזן מספר שני"));

let res = add(x, y);
alert(`התוצאה היא ${res}`);

sum(x, y);