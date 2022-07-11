const dies = document.querySelectorAll(".dies__item");
const wrapper = document.querySelector(".market__dies");

const btnPrev = document.querySelector(".market__btn_prev");
const btnNext = document.querySelector(".market__btn_next");

const widthDesctop = document.documentElement.clientWidth;

const removeClass = () => {
  for (let i = 0; i < dies.length; i++) {
    dies[i].classList.remove('active');
  }
}

const addClass = event => {
  let target = event.target;
  if (target.classList.contains('active')) {
    target.classList.remove('active');
  } else {
    removeClass();
    target.classList.toggle('active');
  }
}

const addClassMous = event => {
  let target = event.target;
  removeClass();
  target.classList.toggle('active');
}

if (widthDesctop < 960) {
  wrapper.addEventListener('click', event => {
    addClass(event);
  })
} else {
  for (let i = 0; i < dies.length; i++) {
    dies[i].addEventListener('mouseenter', event => {
      addClassMous(event)
    })
  }
  for (let i = 0; i < dies.length; i++) {
    dies[i].addEventListener('mouseleave', () => {
      removeClass()
    })
  }
}

btnNext.addEventListener('click', function () {
  btnPrev.disabled = false;
  btnNext.disabled = true;
  wrapper.style.transform = `translateX(-52%)`;
});

btnPrev.addEventListener('click', function () {
  btnPrev.disabled = true;
  btnNext.disabled = false;
  wrapper.style.transform = `translateX(0)`;
});