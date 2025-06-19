// Task: Implement a simple code to use a Promise
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
  })
  .catch((error) => {
    console.error(error);
  });

// Task: Implement code to handle multiple promises. You have to fetch information of 5 different products from API

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
