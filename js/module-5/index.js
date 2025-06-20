//Javascript Module 5

// Task
// Implement 2 event listener on click event of which one executes on bubbling and while other on capture

// Bubbling phase listener default useCapture :false
// Capturing phase listener useCapture :true
const parent = document.querySelector("p");
const child = document.querySelector(".child");

parent.addEventListener("click", function () {
  console.log("clicked parent");
});

child.addEventListener("click", function () {
  console.log("clicked child");
});
