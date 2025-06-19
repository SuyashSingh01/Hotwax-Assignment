// Task: Change image on runtime when it is not available on the specified path while loading the page.

const imgElement = document.getElementById("dynamicImage");
const errorMessage = document.getElementById("errorMessage");
const FALLBACK_IMAGE_URL = "https://placehold.co/600x400";

function handleImageError() {
  this.src = FALLBACK_IMAGE_URL;
  this.alt = "Fallback Image";
  errorMessage.style.display = "block";
  this.removeEventListener("error", handleImageError);
}

function handleImageLoad() {
  console.log("Image loaded successfully:- " + this.src);
}

imgElement.addEventListener("error", handleImageError);
imgElement.addEventListener("load", handleImageLoad);
