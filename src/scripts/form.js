const NUMBER_REGEXP = /\+7\d{10}/g;
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const form = document.forms['form'];

const userName = form['name'];
const number = form['number'];
const email = form['email'];

let isName = false;
let isNumber = false;
let isEmail = false;

// Провірка на валідність Ім'я
const onName = () => {
  if (userName.value.length > 3 && userName.value.length < 25) {
    userName.style.borderColor = '#67AEFC';
    isName = true;
  } else {
    userName.style.borderColor = 'red';
    isName = false;
  }
}

// Провірка на валідність номер телефону
const isNumberlValid = value => {
  return NUMBER_REGEXP.test(value);
}

const onNumber = () => {
  if (isNumberlValid(number.value) && number.value.length === 12) {
    number.style.borderColor = '#67AEFC';
    isNumber = true;
  } else {
    number.style.borderColor = 'red';
    isNumber = false;
  }
}

// Провірка на валідність емейлу
const isEmailValid = value => {
  return EMAIL_REGEXP.test(value);
}

const onEmail = () => {
  if (isEmailValid(email.value)) {
    email.style.borderColor = '#67AEFC';
    isEmail = true;
  } else {
    email.style.borderColor = 'red';
    isEmail = false;
  }
}

userName.addEventListener('input', onName);
number.addEventListener('input', onNumber);
email.addEventListener('input', onEmail);

// Відправка форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Провірка чи всі поля валідні, якщо так, очисчується форма, в іншому випадку показує невалідні поля
  if (isName && isNumber && isEmail) {
    userName.value = '';
    number.value = '';
    email.value = '';
    isName = false;
    isNumber = false;
    isEmail = false;
  } else {
    isName || (userName.style.borderColor = 'red');
    isNumber || (number.style.borderColor = 'red');
    isEmail || (email.style.borderColor = 'red');
  }
});