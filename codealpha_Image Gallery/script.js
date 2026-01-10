const images = document.querySelectorAll(".image-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
  });
});

function showImage() {
  lightboxImg.src = images[currentIndex].src;
}

closeBtn.onclick = () => lightbox.style.display = "none";

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.style.display = "none";
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

// Filters
const filterButtons = document.querySelectorAll(".filters button");
const boxes = document.querySelectorAll(".image-box");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    boxes.forEach(box => {
      box.style.display =
        filter === "all" || box.classList.contains(filter)
        ? "block"
        : "none";
    });
  });
});
