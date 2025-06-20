// Task:1 Implement a simple code to use a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise
  .then((message) => {
    console.log(message);
    return "Chaining another then";
  })
  .then((nextMessage) => {
    console.log("Nextmessage: ", nextMessage);
  })
  .catch((error) => {
    console.error(error);
  });

// Task:2 Implement code to handle multiple promises. You have to fetch information of 5 different products from API

const productIds = [1, 2, 3, 4, 5];
const apiUrl = "https://fakestoreapi.com/products/";

const fetchProduct = async (id) => {
  const response = await fetch(`${apiUrl}${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}`);
  }
  return response.json();
};

const fetchAllProducts = async () => {
  try {
    const productPromises = productIds.map(fetchProduct);
    console.log("PR", productPromises);
    const products = await Promise.all(productPromises);
    console.log("All products fetched successfully:", products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

fetchAllProducts();
console.log(Array.isArray("suyash"));
console.log(Array.from("sapling"));
console.log(Array.from({ name: "suyash" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// -----------------------------------Promise with setTimeout example-----------------------------------
const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
mypromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

let count = 0;
const intervalID = setInterval(function () {
  console.log("This message appears every 1 second. Count: " + count++);
  if (count >= 5) {
    clearInterval(intervalID); // Stop the interval after 5 executions
  }
}, 1000);
