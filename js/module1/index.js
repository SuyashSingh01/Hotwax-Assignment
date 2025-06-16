// Javascript Practice

//  1 Find out about the most popular JavaScript frameworks. (At least 5)
// 2. Find out about the most popular open-source JavaScript frameworks. (At least 5)
// 3. Provided the following  array:
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//    Filter out odd, even, and prime numbers and print them
// 4. Provided the following  array:
//     [0, 2, 4, 6, 8, 10, 12, 14, 16]
// Generate and print another list such that:
//  a. every element being twice of elements in the current list.
//  b. every element being half of the elements in the current list.
// 5. Provided the following  array:
//     [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10]
//   a. Find the sum, min, and max
//   b. Print “List is full of prime no” if every element is prime
//   c. Print “List has a prime no” if there is a prime no in it
//   d. Remove duplicate values from the list ()
// Note.Use the loop for above problems, not the built-in methods.

//  ANSWERS
//1  "React","Angular","Vue.js", "Svelte","Ember.js"
//2  "React","Angular","Vue.js", "Svelte","Ember.js"

// 3

console.log("Odd Numbers:");

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
    // console.log(numbers[i]);
  }
}

console.log("Even Numbers:");
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
    // console.log(numbers[i]);
  }
}
console.log("Prime Numbers:");

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const primeNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    primeNumbers.push(numbers[i]);
    // console.log(numbers[i]);
  }
}
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Prime Numbers:", primeNumbers);

// 4
const originalArray = [0, 2, 4, 6, 8, 10, 12, 14, 16];
// a
const doubledArray = [];
for (let i = 0; i < originalArray.length; i++) {
  doubledArray.push(originalArray[i] * 2);
}
// b
const halvedArray = [];
for (let i = 0; i < originalArray.length; i++) {
  halvedArray.push(originalArray[i] / 2);
}

console.log("Doubled Array:", doubledArray);
console.log("Halved Array:", halvedArray);

// 5
const list = [10, 1, 42, 36, 4, 75, 6, 97, 81, 19, 10];
let sum = 0,
  min = Infinity,
  max = -Infinity;
for (let i = 0; i < list.length; i++) {
  sum += list[i];
  min = Math.min(min, list[i]);
  max = Math.max(max, list[i]);
}

console.log("Sum:", sum);
console.log("Min:", min);
console.log("Max:", max);

// b,c
let f = 0;
for (let i = 0; i < list.length; i++) {
  if (isPrime(list[i])) {
    console.log("List has a prime no:");
    break;
  }
}

for (let i = 0; i < list.length; i++) {
  if (isPrime(list[i])) {
    f++;
  }
}

// b

if (f === list.length) console.log("List is full of prime no:");

// d
const uniqueList = [...new Set(list)];
console.log("List without duplicates:", uniqueList);
