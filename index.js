////////////////////////////////////////////////////////////////////
/////////////////////// Main Slide & Commons ///////////////////////
////////////////////////////////////////////////////////////////////

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

// Main Slide Bars
const nthSlideBar = document.querySelectorAll(
  ".visuals .controls .constrols-container li"
);

//@@@@@@@@@@@@@@ Sharing elements (main,magazine 공통 부분) @@@@@@@@@@@@@@//
// Slide Buttons
// [0] = Main slide / [1] = Magazine slide
const prevBtn = document.querySelectorAll(".slide-button .prev");
const nextBtn = document.querySelectorAll(".slide-button .next");

// [0] = Main slide / [1] = Magazine slide
const playBtn = document.querySelectorAll(
  ".slide-button .controls .constrols-container .play-pause .play"
);
// [0] = Main slide / [1] = Magazine slide
const pauseBtn = document.querySelectorAll(
  ".slide-button .controls .constrols-container .play-pause .pause"
);
//@@@@@@@@@@@@@@ Sharing elements (main,magazine 공통 부분) @@@@@@@@@@@@@@//

//////////////////// Functions ////////////////////
function prevSlideBar() {
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  let prevSlideBar = currentSlideBar.previousElementSibling;
  if (prevSlideBar) {
    prevSlideBar.classList.add(BAR_ON);
  } else {
    nthSlideBar[3].classList.add(BAR_ON);
  }
}
function nextSlideBar() {
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  let nextSlideBar = currentSlideBar.nextElementSibling;
  if (nextSlideBar) {
    nextSlideBar.classList.add(BAR_ON);
  } else {
    nthSlideBar[0].classList.add(BAR_ON);
  }
}

function pickSlideBar(e) {
  let currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
  let currentSlideBar = document.querySelector(`.${BAR_ON}`);
  currentSlideBar.classList.remove(BAR_ON);
  e.currentTarget.classList.add(BAR_ON);
  // match slide bar with image
  if (e.currentTarget === nthSlideBar[0]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    firstSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === nthSlideBar[1]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    secondSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === nthSlideBar[2]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    thirdSlide.classList.add(SHOWING_CLASS);
  }
  if (e.currentTarget === nthSlideBar[3]) {
    currentSlide.classList.remove(SHOWING_CLASS);
    fourthSlide.classList.add(SHOWING_CLASS);
  }
}

function mainSlide() {
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
      nthSlideBar[0].classList.add(BAR_ON);
    }
  }
  // if there's no elements with showing_class, then add one
  else {
    firstSlide.classList.add(SHOWING_CLASS);
    nthSlideBar[0].classList.add(BAR_ON);
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
let slideInterval = setInterval(mainSlide, initialTime);

function playpause(e) {
  let currentPlayPauseBtn = document.querySelector(`.${PlAYPAUSE_ON}`);
  //click -> on
  if (e) {
    currentPlayPauseBtn.classList.remove(PlAYPAUSE_ON);
    e.currentTarget.classList.add(PlAYPAUSE_ON);
  }
  // play the slide
  if (playBtn[0].classList.contains(PlAYPAUSE_ON)) {
    setInterval(mainSlide, initialTime);
  }
  // stop the slide
  if (pauseBtn[0].classList.contains(PlAYPAUSE_ON)) {
    clearInterval(slideInterval);
  }
}

////////////////////////////////////////////////////////////////////
////////////////////////// Magazine Slide //////////////////////////
////////////////////////////////////////////////////////////////////

//////////////////// Global Variables ////////////////////
const magazineSlides = document.querySelector(".magazine");
const magazineSlide = document.querySelectorAll(".magazine .slide-box > div");
let currentIdx = 0;
const slideCount = magazineSlide.length; //3
// Magazine buttons :
//                  prevBtn[1]
//                  nextBtn[1]

const slideWidth = 1180;
const slideMargin = 100;

////////////////////////////////////////////////////////////////////
////////////////////////////// Main  ///////////////////////////////
////////////////////////////////////////////////////////////////////

function init() {
  //-------------------- main slide --------------------//
  mainSlide();
  // prev, next button eventListener
  prevBtn[0].addEventListener("click", prev);
  nextBtn[0].addEventListener("click", next);
  // slide bar picker eventListener
  nthSlideBar[0].addEventListener("click", pickSlideBar);
  nthSlideBar[1].addEventListener("click", pickSlideBar);
  nthSlideBar[2].addEventListener("click", pickSlideBar);
  nthSlideBar[3].addEventListener("click", pickSlideBar);
  // play, pause button eventListener
  playBtn[0].addEventListener("click", playpause);
  pauseBtn[0].addEventListener("click", playpause);
}
init();
