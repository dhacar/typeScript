let myName: string = "zack";

console.log(`Hello, ${myName}!`);
  

let myAge: number = 23;

console.log(`I am ${myAge} years old.`);


let Student: boolean = true;

console.log(`Am I a student? ${Student}`);


function getDiscount(price: number, discount: number): number {
    return price - price * discount 
}
console.log(`The discounted price is: ${getDiscount(100, 0.2)}`);


function printLength(x: unknown) {
  if (typeof x === "string" || Array.isArray(x)) {
    console.log(x.length);
  } else {
    console.log("No length property");
  }
}
printLength("Hello, world!");
printLength([1, 2, 3]);
printLength(42);