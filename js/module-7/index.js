// Task: To create a textarea and if a user makes changes to it without saving then show an alert that data is not saved.

const textarea = document.createElement("textarea");
textarea.placeholder = "Type something here...";
document.body.appendChild(textarea);

let isChanged = false;
textarea.addEventListener("input", function () {
  isChanged = true;
});
// Show an alert if the user tries to leave the page without saving changes
window.addEventListener("beforeunload", function (event) {
  if (isChanged) {
    const confirmationMessage = "Save changes before leaving";
    event.preventDefault();
    return confirmationMessage;
  }
});

// Change the color of the cell to red when the user clicks on a cell and revert when the user again clicks
textarea.addEventListener("click", function () {
  if (textarea.style.backgroundColor === "red") {
    textarea.style.backgroundColor = "";
  } else {
    textarea.style.backgroundColor = "red";
  }
});
