// console.log("Infinite Scroll");

/**
 * Algorithm
 * 1. Design UI
 * 2. Get the initial data and render the UI
 * 3. Register event "onnscroll"
 * 4. Build the logic to load images on scroll (API Call + Re-rendering)
 */

let ready = false;
const count = 20;
let imagesLoaded = 0;
const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}&page=2`;

const imagesContainer = document.getElementById("imagesContainer");
const loader = document.getElementById("loader");
console.log(loader)
const getImages = async () => {
  try {
    loader.style.display = "block";
    const response = await fetch(apiUrl);
    const imagesArray = await response.json();
    displayImages(imagesArray);
  } catch (err) {
    console.log(err);
  }
};

const onImageLoaded = () => {
  imagesLoaded++;
  if (count === imagesLoaded) {
    // All the images have loaded
    ready = true; // Ready to load more images
    loader.style.display = "none";
    console.log("READY IS BEING SET TO TRUE");
  }
  console.log("Img finished loading");
};

const displayImages = (imagesArray) => {
  imagesArray.forEach((imageObject) => {
    const img = document.createElement("img");
    img.src = imageObject.urls.regular;
    img.alt = "Random Image";
    img.addEventListener("load", onImageLoaded);
    imagesContainer.append(img);
  });
};

getImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight &&
    ready === true
  ) {
    ready = false;
    imagesLoaded = 0;
    getImages();
    console.log("Reached bottom");
  }
});
