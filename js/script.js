/*
- Purpose: Practice JS API fetch --> Image Generator
- Date: 03-NOV-2022 / 04-NOV-2022
*/

// ==== variables ====
const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// ==== async functions ====
const getImage = async function (
  url = "https://picsum.photos/v2/list?limit=100"
) {
  const res = await fetch(url);
  const images = await res.json();
  selectRandomImage(images);
  // button.innerText = "Press [esc] to clear";
};

// ==== function expressions ====

const selectRandomImage = function (images) {
  const randomIndex = images[Math.floor(Math.random() * images.length)];
  const randomImage = randomIndex;
  displayImage(randomImage);
};

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;
  authorSpan.innerText = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

// ==== enable image w/ button click ====
button.addEventListener("click", function () {
  getImage();
});

// ==== hide image container ===
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" || e.key === "Enter") {
    imgDiv.classList.add("hide");
    button.innerText = "Show me an image!";
  }
});
