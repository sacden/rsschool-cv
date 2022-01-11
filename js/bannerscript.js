const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const bannersidebar = document.querySelector(".bannersidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".bannerContainer");

let activeSlideIndex = 0;

bannersidebar.style.top = `-${(slidesCount - 1) * 40}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  bannersidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
