//////////////////// Global Variables ////////////////////

// Slides
const firstSlide = document.querySelector(
  ".visuals .contents .slide img:nth-child(2)"
);
const secondSlide = document.querySelector(
  ".visuals .contents .slide img:nth-child(3)"
);
const thirdSlide = document.querySelector(
  ".visuals .contents .slide img:nth-child(4)"
);
const fourthSlide = document.querySelector(
  ".visuals .contents .slide img:nth-child(5)"
);

const SHOWING_CLASS = "showing";

// Buttons
const prevBtn = document.querySelector(".slide-button .prev");
const nextBtn = document.querySelector(".slide-button .next");

//////////////////// Functions ////////////////////

function slide() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  // if there's an element with shoing_class, then switch to next sibling
  if (currentSlide) {
    currentSlide.classList.remove(SHOWING_CLASS);
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide) {
      nextSlide.classList.add(SHOWING_CLASS);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
  }
  // if there's no elements with showing_class, then add one
  else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function prev() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlide.classList.remove(SHOWING_CLASS);
  let prevSlide = currentSlide.previousElementSibling;
  if (prevSlide && prevSlide.nodeName == "IMG") {
    prevSlide.classList.add(SHOWING_CLASS);
  } else {
    fourthSlide.classList.add(SHOWING_CLASS);
  }
}
function next() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlide.classList.remove(SHOWING_CLASS);
  let nextSlide = currentSlide.nextElementSibling;
  if (nextSlide && nextSlide.nodeName == "IMG") {
    nextSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}

function init() {
  slide();
  setInterval(slide, 6000); // 6sec
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}
init();
