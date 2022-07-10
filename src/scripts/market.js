const dies = document.querySelectorAll(".dies__die");
const wrapper = document.querySelector(".market__dies");

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