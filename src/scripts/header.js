const rootElement = document.querySelector('.header');
const btn = rootElement.querySelector('.header__elipses');

const parent = document.querySelector('.header__menu');
let menuItem = parent.querySelectorAll('.li');

let isOpen = false;

// Відкрити меню для мобільних пристроїв
const openMenu = () => {
  parent.style.transform = `translateY(0)`;
  isOpen = true;
}

// Закрити меню
const closeMenu = () => {
  parent.style.transform = `translateY(-150%)`;
  isOpen = false;
}

// Клік на кнопку
btn.addEventListener('click', () => {
  if(isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Клік на список в меню
parent.addEventListener('click', event => {
  let target = event.target;
  if(target.classList.contains('li')) {
    // Видалення всіх класів 'active'
    for(let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('active');
    }
    // Добавляємо клас 'active' потрібному елементу
    target.classList.add('active');
  }
  // Закриваємо меню
  closeMenu();
});