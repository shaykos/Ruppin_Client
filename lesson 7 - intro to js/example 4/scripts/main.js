import { isEven } from './functions.js';

let n = Number(prompt("כתוב מספר. רשום 0 כדי לצאת ולסיים את התוכנית"));

while (n != 0) {
    console.log(`${n} is even? ${isEven(n)}`);
    n = Number(prompt("כתוב מספר. רשום 0 כדי לצאת ולסיים את התוכנית"));
}

