const NUMBER_REGEXP = /\+7\d{10}/g;
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const form = document.forms['form'];

const userName = form['name'];
const number = form['number'];
const email = form['email'];

let isName = false;
let isNumber = false;
let isEmail = false;

const isEmailValid = value => {
  return EMAIL_REGEXP.test(value);
}

const isNumberlValid = value => {
  return NUMBER_REGEXP.test(value);
}

const onName = () => {
  if (userName.value.length > 3 && userName.value.length < 25) {
    userName.style.borderColor = '#67AEFC';
    isName = true;
  } else {
    userName.style.borderColor = 'red';
    isName = false;
  }
}

const onNumber = () => {
  if (isNumberlValid(number.value)) {
    number.style.borderColor = '#67AEFC';
    isNumber = true;
  } else {
    number.style.borderColor = 'red';
    isNumber = false;
  }
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

form.addEventListener('submit', event => {
  event.preventDefault();

  if (isName && isNumber && isEmail) {
    userName.value = '';
    number.value = '';
    email.value = '';
  } else {
    userName.style.borderColor = 'red';
    number.style.borderColor = 'red';
    email.style.borderColor = 'red';
  }
});