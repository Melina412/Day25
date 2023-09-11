// * 1_8

let x = 20;
let y = 30;

console.log(x + y);
console.log(x - y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let z = 10;
let resultOne = (x * y) / z;
console.log(resultOne);

let a = 15;
let b = 9;

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo);

console.log(a);
console.log(a++);
console.log("a neu", a);

console.log(b);
console.log(b--);
console.log("b neu", b);

let resultThree = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);

// wo kommen in der ergebnisvorschau die 1.5 in zeile 18 und die 28 in zeile 43 her?

// * 1_12

console.log("----- 1_12 -----");

let score = 5 + 5 * 10;
console.log("result" + score);

let score2 = (5 + 5) * 10;
console.log("result" + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("result" + score3);

score3 += 10;
console.log("result" + score3);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;
console.log("increment: " + zahl);

let zahl2 = 1;
zahl2 = zahl2 - 1;
zahl2 -= 1;
console.log("decrement: " + zahl2);

// * 1_13

console.log("----- 1_13 -----");

// Addition
let addition_operator = 1 + 1;
console.log("addition: " + addition_operator);
// Subtraktion
let subtraktion_operator = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);
// Multiplikation
let multiplication_operator = 2 * 2;
console.log("multiplication: " + multiplication_operator);
// Division
let division_operator = 4 / 2;
console.log("division: " + division_operator);
// Modul: zeigt an, was der Rest sein würde.
let modulus_operator = 14 % 5;
console.log("modulus: " + modulus_operator);
