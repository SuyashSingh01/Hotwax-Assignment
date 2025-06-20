//Javascript Practice

// Task
//1 Implement code to deep clone an object using JSON methods
// Answer:
const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = JSON.parse(JSON.stringify(originalObject));
console.log("cloned", clonedObject); // { a: 1, b: { c:2 } };

// 2 Implement regular expression for name with letters
const nameRegex = /^[A-Za-z]+$/;
const testName1 = "John";
const testName2 = "John123";
console.log(nameRegex.test(testName1)); // true
console.log(nameRegex.test(testName2)); // false

//3 Implement code for sum using recursion
function recursionSum(n) {
  if (n <= 0) return 0;
  return n + recursionSum(n - 1);
}
console.log("Sum using recursion:", recursionSum(5)); // Output: 15
