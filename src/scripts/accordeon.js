const btns = document.getElementsByClassName("item__btn");
const acc = document.getElementsByClassName("accordeon__item");

for (let i = 0; i < acc.length; i++) {
  btns[i].addEventListener("click", function() {
    acc[i].classList.toggle("active");
  });
}