// Javascript Practice
// Task
// 1. Provided following array:

// [
// {“id”: 1, “name”: “Amit Kumar”, “age”: 25},
// {“id”: 2, “name”: “Rahul Dixit”, “age”: 20},
// {“id”: 3, “name”: “Ravi Joshi”, “age”: 55},
// {“id”: 4, “name”: “Rohit Verma”, “age”: 35},
// {“id”: 5, “name”: “Ajay Jain”, “age”: 17},
// ]

//   a. Print id and name of the youngest and oldest person
//   b. Create another list having id and name of all the person above 18 years
//   c. Find the average age
//   d. Create 2 list with names starting with only ‘A’ and ‘R’ respectively

// Note: Use map(), filter(), reduce, some() and every() methods for above problems

const obj = [
  { id: 1, name: "Amit Kumar", age: 25 },
  { id: 2, name: "Rahul Dixit", age: 20 },
  { id: 3, name: "Ravi Joshi", age: 55 },
  { id: 4, name: "Rohit Verma", age: 35 },
  { id: 5, name: "Ajay Jain", age: 17 },
];

const youngestOne = Math.min(...obj.map((item) => item.age));
const oldestOne = Math.max(...obj.map((item) => item.age));
const yougestPerson = obj.find((item) => item.age === youngestOne);
const oldestPerson = obj.find((item) => item.age === oldestOne);

console.log("Youngest Age:", youngestOne);
console.log("Oldest Age:", oldestOne);

console.log("Youngest Person:", yougestPerson.id, yougestPerson.name);
console.log("Oldest Person:", oldestPerson.id, oldestPerson.name);

// Task : 2
// 2.  Try the below code and identify which of the below programs are a valid case of hoisting?

// Program 1:
// a = 10;
// console.log(a);
// var a;

// Program 2:
// a = 5;
// console.log(a);
// let a;
// Answer:- Program 1 is a valid case of hoisting, while Program 2 is not.

// Practice with alerts,prompts, and confirms
alert("Welcome to the JavaScript Practice!");
confirm("Do you want to continue?");
let name = prompt("Please enter your name", "Guest");
if (name) {
  alert("Hello, " + name + "!");
} else {
  alert("Hello, Guest!");
}
// Practice with loops
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let element of numbers) {
  console.log(element);
}
// Practice with forEach
numbers.forEach((element) => {
  console.log(element);
});

// Practice with for...in
for (let element in numbers) {
  console.log(element, numbers[element]);
}

const number = [1, 2, 3, 4];
const evens = number.filter((num) => {
  return num % 2 === 0;
});
console.log("eventnumber", evens); // Output: [2, 4]

// Spread operator practice
const test = [...obj];
console.log("test:", test);
// Rest operator practice
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};
sum(1, 2, 3, 4, 5); // Output: 15

// Practice with arrow functions
const square = (num) => num * num;
// Example usage
console.log("Square of 5:", square(5)); // Output: Square of 5: 25

// Practice with classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}
const person1 = new Person("Suyash", 23);
const person2 = new Person("Amit", 30);
person1.greet(); // Output: Hello, my name is Suyash and I am 23 years old.
person2.greet(); // Output: Hello, my name is Amit and I am 30 years old.
person1.eat(); // Output: Suyash is eating.
