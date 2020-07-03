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

let initialTime = 3000;
const SHOWING_CLASS = "showing";
const BAR_ON = "bar-on";
const PlAYPAUSE_ON = "p-on";
// Slide Buttons
const prevBtn = document.querySelector(".slide-button .prev");
const nextBtn = document.querySelector(".slide-button .next");

// Slide Bar
const firstSlideBar = document.querySelector(
  ".slide-button .controls .constrols-container li:nth-child(1)"
);
const secondSlideBar = document.querySelector(
  ".slide-button .controls .constrols-container li:nth-child(2)"
);
const thirdSlideBar = document.querySelector(
  ".slide-button .controls .constrols-container li:nth-child(3)"
);
const fourthSlideBar = document.querySelector(
  ".slide-button .controls .constrols-container li:nth-child(4)"
);

const playBtn = document.querySelector(
  ".slide-button .controls .constrols-container .play-pause .play"
);
const pauseBtn = document.querySelector(
  ".slide-button .controls .constrols-container .play-pause .pause"
);

//////////////////// Functions ////////////////////
function prevSlideBar() {
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  let prevSlideBar = currentSlideBar.previousElementSibling;
  if (prevSlideBar) {
    prevSlideBar.classList.add(BAR_ON);
  } else {
    fourthSlideBar.classList.add(BAR_ON);
  }
}
function nextSlideBar() {
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  let nextSlideBar = currentSlideBar.nextElementSibling;
  if (nextSlideBar) {
    nextSlideBar.classList.add(BAR_ON);
  } else {
    firstSlideBar.classList.add(BAR_ON);
  }
}

function pickSlideBar(e) {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  e.currentTarget.classList.add(BAR_ON);
  // match slide bar with image
  if (e.currentTarget === firstSlideBar) {
    currentSlide.classList.remove(SHOWING_CLASS);
    firstSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === secondSlideBar) {
    currentSlide.classList.remove(SHOWING_CLASS);
    secondSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === thirdSlideBar) {
    currentSlide.classList.remove(SHOWING_CLASS);
    thirdSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === fourthSlideBar) {
    currentSlide.classList.remove(SHOWING_CLASS);
    fourthSlide.classList.add(SHOWING_CLASS);
  }
}

function slide() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  // if there's an element with shoing_class, then switch to next sibling
  if (currentSlide && currentSlideBar) {
    currentSlide.classList.remove(SHOWING_CLASS);
    currentSlideBar.classList.remove(BAR_ON);

    let nextSlide = currentSlide.nextElementSibling;
    let nextSlideBar = currentSlideBar.nextElementSibling;

    if (nextSlide && nextSlideBar) {
      nextSlide.classList.add(SHOWING_CLASS);
      nextSlideBar.classList.add(BAR_ON);
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
      firstSlideBar.classList.add(BAR_ON);
    }
  }
  // if there's no elements with showing_class, then add one
  else {
    firstSlide.classList.add(SHOWING_CLASS);
    firstSlideBar.classList.add(BAR_ON);
  }
}

function prev() {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  currentSlide.classList.remove(SHOWING_CLASS);
  let prevSlide = currentSlide.previousElementSibling;
  prevSlideBar();
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
  nextSlideBar();
  if (nextSlide && nextSlide.nodeName == "IMG") {
    nextSlide.classList.add(SHOWING_CLASS);
  } else {
    firstSlide.classList.add(SHOWING_CLASS);
  }
}
// start the interval
let slideInterval = setInterval(slide, initialTime);

function playpause(e) {
  let currentPlayPauseBtn = document.querySelector(`.${PlAYPAUSE_ON}`);
  //click -> on
  if (e) {
    currentPlayPauseBtn.classList.remove(PlAYPAUSE_ON);
    e.currentTarget.classList.add(PlAYPAUSE_ON);
  }
  // play the slide
  if (playBtn.classList.contains(PlAYPAUSE_ON)) {
    setInterval(slide, initialTime);
  }
  // stop the slide
  if (pauseBtn.classList.contains(PlAYPAUSE_ON)) {
    clearInterval(slideInterval);
  }
}

function init() {
  slide();
  // prev, next button eventListener
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  // slide bar picker eventListener
  firstSlideBar.addEventListener("click", pickSlideBar);
  secondSlideBar.addEventListener("click", pickSlideBar);
  thirdSlideBar.addEventListener("click", pickSlideBar);
  fourthSlideBar.addEventListener("click", pickSlideBar);
  // play, pause button eventListener
  playBtn.addEventListener("click", playpause);
  pauseBtn.addEventListener("click", playpause);
}
init();
