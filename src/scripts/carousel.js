const slider = document.querySelector(".carousel__cards");
const slides = document.querySelectorAll(".card");
const slide = document.querySelector(".card");

const btnPrev = document.querySelector(".btn_prev");
const btnNext = document.querySelector(".btn_next");

const widthDesctop = document.documentElement.clientWidth;

const ln = slides.length;
let i = 0;
let proc = 200;

if (widthDesctop > 1200) {
  proc = 210
} else if (widthDesctop > 960 && widthDesctop < 1199) {
  proc = Math.round((720 * (ln - 1)) / widthDesctop * 100)
} else if (widthDesctop > 780 && widthDesctop < 959) {
  proc = Math.round((650 * (ln - 1)) / widthDesctop * 100)
} else {
  proc = (Math.round(widthDesctop / (slide.offsetWidth - 24) * 100)) * (ln - 1)
}

let transform = () => {
  slider.style.transform = `translateX(-${i * proc / (ln - 1)}%)`;
}

const nextSlide = () => {
  if (i < ln - 1) {
    i++
  } else {
    i = 0
  }
  transform();
}

const prevSlide = () => {
  if (i > 0) {
    i--
  } else {
    i = ln - 1
  }
  transform();
}

let slideInterval = setInterval(nextSlide, 4000);

const playSlideshow = () => {
  slideInterval = setInterval(nextSlide, 4000);
}

btnNext.addEventListener('click', function () {
  clearInterval(slideInterval);
  nextSlide();
  setTimeout(playSlideshow, 2000);
});

btnPrev.addEventListener('click', function () {
  clearInterval(slideInterval);
  prevSlide();
  setTimeout(playSlideshow, 2000);
});