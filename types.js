console.log(typeof undefined) // undefined

console.log(typeof "Test"); // string

console.log(typeof 8); // number

console.log(typeof true); // boolean

let x = {}
console.log(typeof x); // object

console.log(typeof Symbol("&")); // symbol

console.log(typeof y); // undefined (undeclared)

console.log(typeof null); // null is an object

let w = () => {
    console.log("Hi");
}
console.log(typeof w); // function

let q = [1, 2, 3]
console.log(typeof q); // array is an object

console.log(typeof 1n || BigInt(42)); // bigint

console.log(Number("Test")); // NaN

let zero = -0
console.log(Object.is(zero, 0)) // false
console.log(Object.is(zero, -0)) // true