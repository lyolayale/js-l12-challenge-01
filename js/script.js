/*
- Purpose: Practice JS API fetch --> Image Generator
- Date: 03-NOV-2022 / 04-NOV-2022
*/

// =================================
// ==== Image Generator Program ====
// =================================

// ==== Object Wrapper --> save global name space ====

const imageGenerator = {
  init: function () {
    // ==== variables ====

    const button = document.querySelector("button");
    const authorSpan = document.querySelector(".author");
    const imgDiv = document.querySelector(".image-container");
    const img = document.querySelector(".img");
    const small = document.querySelector("small");

    // ==== async fn ====

    const getImage = async function (
      url = "https://picsum.photos/v2/list?limit=100"
    ) {
      const res = await fetch(url);
      const images = await res.json();
      selectRandomImage(images);
    };

    // ==== fn ====

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

    // =========================
    // === event listeners =====
    // =========================

    // ==== enable image w/ button click ====

    button.addEventListener("click", function () {
      getImage();
      this.innerText = "Next Image!";
    });

    // ==== hide image container ===

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        imgDiv.classList.add("hide");
        button.innerText = "Show me an image!";
      }
    });

    // ==== hover button --> display esc message ====

    // -- hover on --
    button.addEventListener("mouseover", function () {
      small.classList.remove("hide");
      this.style.cursor = "pointer";
    });

    // -- hover off --
    button.addEventListener("mouseout", function () {
      small.classList.add("hide");
    });
  },
};

// ======================
// ==== init Program ====
// ======================

imageGenerator.init();
