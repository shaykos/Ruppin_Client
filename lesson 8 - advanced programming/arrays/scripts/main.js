
let menu = ["rice", "pizza", "ice-cream"];
console.log('menu.length -->', menu.length);
console.log('menu[3] --> ', menu[3]);
menu[3] = "sushi";
menu[100] = "avokado";

console.log('menu -->', menu);


let book = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
book.push(11);
console.log('book after push --> ', book);

let last = book.pop();
console.log('book after pop --> ', book);
console.log('last --> ', last);

let first = book.shift();
console.log('book after shift --> ', book);
console.log('first --> ', first);

book.unshift("BOOK COVER");
console.log('book after unshift --> ', book);

console.log('book.join() --> ', book.join());
console.log('book.join("-->") --> ', book.join("-->"));

let arr = menu.concat(book);
console.log("arr.join() --> ", arr.join());

book.reverse();
console.log("book after reverse() --> ", book);

let minibook = book.slice(4, 7);
console.log("minibook --> ", minibook);

/* 
C# foreach
-----------
int[] nums = {1,2,3,5};
foreach(int n in nums) {Console.WriteLine(n);}
*/
console.log("foreach");
let nums = [1, 2, 3, 4, 5];
nums.forEach((n) => { console.log(n) });
/*
    for(let i = 0; i < nums.length; i++){
        let n = nums[i];
        console.log(n);
    }
*/

let prices = [100, 10, 20, 500];
console.log("map");
let pricesWithVAT = prices.map((p) => { return p * 1.18 });
console.log('pricesWithVAT --> ', pricesWithVAT);
/*
    let prices = [100, 10, 20, 500];
    let pricesWithVAT = [];
    for(let i = 0; i < prices.length; i++){
        pricesWithVAT.push(prices[i] * 1.18);
    }
*/

console.log(pricesWithVAT[pricesWithVAT.length - 1]);
console.log(pricesWithVAT.at(-1));
console.log(pricesWithVAT.at(-2));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
numbers.sort();
console.log('SORT');
console.log('numbers after sort --> ', numbers);
numbers.sort((a, b) => a - b); // בסדר עולה
console.log('numbers after sort2 --> ', numbers);
numbers.sort((a, b) => b - a); // סדר ירד
console.log('numbers after sort3 --> ', numbers);

let sum = numbers.reduce((total, current) => { return total + current }, 0);
console.log("sum --> ", sum);

/*
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        let current = numbers[i];
        total += current;
    }
*/

