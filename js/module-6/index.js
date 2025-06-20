// Javascript
// Task:1 Change the background color of the second column of a table having “n ” rows on click by using querySelector.

const table = document.querySelector("table");
const secondColumnCells = table.querySelectorAll("tr td:nth-child(2)");
console.log(secondColumnCells);

secondColumnCells.forEach((cell) => {
  cell.addEventListener("click", myCb);
});

function myCb(event) {
  const cell = event.target;
  cell.style.backgroundColor = "lightblue";
}

// Here added listener on table using event delegation
table.addEventListener("click", function (event) {
  const cell = event.target;
  if (cell.tagName === "TD" && cell.cellIndex === 1) {
    cell.style.backgroundColor = "lightblue";
  }
});
