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

let initialTime = 4000;
const SHOWING_CLASS = "showing";
const BAR_ON = "bar-on";
const PlAYPAUSE_ON = "p-on";

// Main Slide Bars
const nthSlideBar = document.querySelectorAll(
  ".visuals .controls .constrols-container li"
);

const slideIcon = document.querySelector(
  ".visuals .contents .slide .slide-icon"
);

const slideText = document.querySelector(".visuals .contents .slide .txt");

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
function iconChange() {
  if (firstSlide.classList.contains(SHOWING_CLASS)) {
    slideIcon.style.backgroundPosition = "-2px -260px";
    slideText.innerHTML = "Eco-Friendly <strong>Flooring</strong>";
  }

  if (secondSlide.classList.contains(SHOWING_CLASS)) {
    slideIcon.style.backgroundPosition = "-127px -260px";
    slideText.innerHTML = "Beautiful Filling <strong>Walls</strong>";
  }

  if (thirdSlide.classList.contains(SHOWING_CLASS)) {
    slideIcon.style.backgroundPosition = "-257px -260px";
    slideText.innerHTML = "Happy Opening <strong>Doors<strong>";
  }

  if (fourthSlide.classList.contains(SHOWING_CLASS)) {
    slideIcon.style.backgroundPosition = "-380px -260px";
    slideText.innerHTML = "Life Worth <strong>Furnitures<strong>";
  }
}

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
  iconChange();
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
    iconChange();
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
  iconChange();
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
  iconChange();
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
const magazineSlide = document.querySelectorAll(".magazine .slide-box > div");
let currentIdx = 2; //default
const slideCount = magazineSlide.length; //3
// Magazine buttons :
//                  prevBtn[1]
//                  nextBtn[1]
const slideWidth = 1180;
const slideMargin = 100;

const M_BAR_ON = "mbar-on";
const MPLAYPAUSE_ON = "mp-on";

const nthMagazineSlideBar = document.querySelectorAll(
  ".magazine .controls .constrols-container li"
);
const magazineTime = initialTime + 3000;
//////////////////// Functions ////////////////////

function moveSlide(index) {
  let currentSlideBar = document.querySelector(`.${M_BAR_ON}`);
  //for all slides
  for (let i = 0; i < magazineSlide.length; i++) {
    if (index == 1)
      magazineSlide[i].style.transform = "translate(" + 58.48 + "%," + 0 + ")"; //왼쪽
    if (index == 2)
      magazineSlide[i].style.transform = "translate(" + -50 + "%," + 0 + ")"; //중간 (기본)
    if (index == 3)
      magazineSlide[i].style.transform =
        "translate(" + -158.48 + "%," + 0 + ")"; //오른쪽
  }
  currentIdx = index; // update current index
  // slide bar update
  currentSlideBar.classList.remove(M_BAR_ON);
  nthMagazineSlideBar[currentIdx - 1].classList.add(M_BAR_ON);
}

function prevMagazineSlide() {
  if (currentIdx > 1) moveSlide(currentIdx - 1);
  else {
    // go to last slide
    moveSlide(slideCount);
  }
}

function nextMagazineSlide() {
  if (currentIdx < slideCount) moveSlide(currentIdx + 1);
  else {
    // go back to first slide
    moveSlide(1);
  }
}

function pickMagazineSlideBar(e) {
  let currentSlideBar = document.querySelector(`.${M_BAR_ON}`);
  currentSlideBar.classList.remove(M_BAR_ON);
  e.currentTarget.classList.add(M_BAR_ON);

  if (e.currentTarget === nthMagazineSlideBar[0]) moveSlide(1);
  if (e.currentTarget === nthMagazineSlideBar[1]) moveSlide(2);
  if (e.currentTarget === nthMagazineSlideBar[2]) moveSlide(3);
}

// start the interval (magazine)
let magazineSlideInterval = setInterval(nextMagazineSlide, magazineTime);

function magazinePlay(e) {
  let currentPlayPauseBtn = document.querySelector(`.${MPLAYPAUSE_ON}`);
  if (e) {
    currentPlayPauseBtn.classList.remove(MPLAYPAUSE_ON);
    e.currentTarget.classList.add(MPLAYPAUSE_ON);
  }
  // play the slide
  if (playBtn[1].classList.contains(MPLAYPAUSE_ON)) {
    setInterval(nextMagazineSlide, magazineTime);
  }
  // stop the slide
  if (pauseBtn[1].classList.contains(MPLAYPAUSE_ON)) {
    clearInterval(magazineSlideInterval);
  }
}

////////////////////////////////////////////////////////////////////
////////////////////////////// Main  ///////////////////////////////
////////////////////////////////////////////////////////////////////

function init() {
  //------------------------ main slide --------------------------//
  mainSlide();
  // prev, next button eventListener
  prevBtn[0].addEventListener("click", prev);
  nextBtn[0].addEventListener("click", next);
  // slide bar picker eventListener
  for (let i = 0; i < nthSlideBar.length; i++) {
    nthSlideBar[i].addEventListener("click", pickSlideBar);
  }

  // play, pause button eventListener
  playBtn[0].addEventListener("click", playpause);
  pauseBtn[0].addEventListener("click", playpause);

  //---------------------- magazine slide -----------------------//
  prevBtn[1].addEventListener("click", prevMagazineSlide);
  nextBtn[1].addEventListener("click", nextMagazineSlide);
  // play, pause button eventListener
  playBtn[1].addEventListener("click", magazinePlay);
  pauseBtn[1].addEventListener("click", magazinePlay);
  for (let i = 0; i < nthMagazineSlideBar.length; i++) {
    nthMagazineSlideBar[i].addEventListener("click", pickMagazineSlideBar);
  }
}
init();
