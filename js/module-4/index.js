//Javascript Practice

// Task
//1 Implement code to deep clone an object using JSON methods
// Answer:
const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = JSON.parse(JSON.stringify(originalObject));
console.log("cloned", clonedObject); // { a: 1, b: { c:2 } };

// Implement regular expression for name with letters
const nameRegex = /^[A-Za-z]+$/;
const testName1 = "John";
const testName2 = "John123";
console.log(nameRegex.test(testName1)); // true
console.log(nameRegex.test(testName2)); // false

// Implement code for sum using recursion
function recursionSum(n) {
  if (n <= 0) return 0;
  return n + recursionSum(n - 1);
}
console.log("Sum using recursion:", recursionSum(5)); // Output: 15

// // Classes and Inheritance
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hi, ${this.name}`);
//   }
// }

// const u = new User("Suyash");
// u.greet(); // Hi, Suyash

// // Inheritance
// class Admin extends User {
//   constructor(name, role) {
//     super(name);
//     this.role = role;
//   }

//   greet() {
//     console.log(`Hi, ${this.name}, you are an ${this.role}`);
//   }
// }
// const a = new Admin("Amit", "Admin");
// a.greet(); // Hi, Amit, you are an Admin

// //Extending the built in method of Array

// class MyArray extends Array {
//   first() {
//     return this[0];
//   }
// }

// const arr = new MyArray(1, 2, 3);
// console.log(arr.first()); // 1
