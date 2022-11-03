/*
- Purpose: Practice JS API fetch --> Image Generator
- Date: 03-NOV-2022
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
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const img2 = document.createElement("img");
  img2.src = randomImage.download_url;

  document.body.prepend(img2);
  console.log(randomImage);
  console.log(images);
};

getImage();
