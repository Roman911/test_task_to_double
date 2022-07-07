const rootElement = document.querySelector('.header');
const btn = rootElement.querySelector('.header__elipses');

const parent = document.querySelector('.header__menu');
let menuItem = parent.querySelectorAll('.li');

const toggleClass = () => {
  parent.classList.toggle('active')
}

const removeClass = () => {
  parent.classList.remove('active')
}

btn.addEventListener('click', function() {
  toggleClass()
})

parent.addEventListener('click', (event) => {
  let target = event.target;
  if(target.classList.contains('li')) {
    for(let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('active');
    }
    target.classList.add('active');
  }
  removeClass();
});