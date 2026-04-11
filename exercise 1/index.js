"use strict";
let myName = "zack";
console.log(`Hello, ${myName}!`);
let myAge = 23;
console.log(`I am ${myAge} years old.`);
let Student = true;
console.log(`Am I a student? ${Student}`);
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(`The discounted price is: ${getDiscount(100, 0.2)}`);
function printLength(x) {
    if (typeof x === "string" || Array.isArray(x)) {
        console.log(x.length);
    }
    else {
        console.log("No length property");
    }
}
printLength("Hello, world!");
printLength([1, 2, 3]);
printLength(42);
