// Javascript Practice
// 1. Find the difference between Object and Map.
// Ans: // Object is a key-value pair data structure that allows for storing and retrieving values
// using string keys. Maps, on the other hand, are also key-value pairs but allow for any type of
// key (including objects) and maintain the order of insertion. Maps have better performance for
// frequent additions and removals of key-value pairs compared to Objects.

// 2. Identify the difference between regular functions and arrow functions
// Ans: Regular functions have their own `this` context, while arrow functions inherit the `this` context from their enclosing scope. Arrow functions also do not have their own `arguments` object, and they cannot be used as constructors (i.e., they cannot be called with `new`).

// 3. Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
const evenNumbers = numbers.filter((num) => num % 2 === 0);
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = numbers.filter(isPrime);
console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);
console.log("Prime Numbers:", primeNumbers);

// 4. Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that:
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.
const originalArray = [0, 2, 4, 6, 8, 10, 12, 14, 16];
const doubledArray = originalArray.map((num) => num * 2);
const halvedArray = originalArray.map((num) => num / 2);
console.log("Doubled Array:", doubledArray);
console.log("Halved Array:", halvedArray);

// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list.
//  e. Remove duplicate values from the list without using loop or any of the above methods (map(), filter(), reduce(), some() and every())
const list = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
const sum = list.reduce((acc, num) => acc + num, 0);
const min = Math.min(...list);
const max = Math.max(...list);
const hasPrime = list.some(isPrime);
const allPrime = list.every(isPrime);

console.log("Sum:", sum);
console.log("Min:", min);
console.log("Max:", max);
console.log("List is full of prime no:", allPrime);
console.log("List has a prime no:", hasPrime);
// Note: Use map(), filter(), reduce(), some() and every() methods for above problems

// 6.  Provided an array of integers, find if there are any duplicates in the array.
// Output:
// true -  if any value appears at least twice in the array,
// false - if every element is distinct.

// Example:
// Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
// Output -> true

// Array ->  [10, 1, 42, 36, 4, 75, 6, 97, 81, 19]
// Output -> false

const hasDuplicates = (arr) => {
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(num)) return true;

    seen.add(num);
  }
  return false;
};
const arrayWithDuplicates = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
const arrayWithoutDuplicates = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19];
console.log("Array with duplicates:", hasDuplicates(arrayWithDuplicates)); // true
console.log("Array without duplicates:", hasDuplicates(arrayWithoutDuplicates)); // false
