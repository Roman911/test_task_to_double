const anchors = document.querySelectorAll(".btn_scroll");
const animationTime = 300;
const framesCount = 150;

anchors.forEach(item => {
  item.addEventListener('click', () => {
    let coordY = document.querySelector(".discussion").getBoundingClientRect().top + window.pageYOffset;

    // запускаємо інтервал
    let scroller = setInterval(() => {
      // рахуємо на скільки скролити за 1 такт
      let scrollBy = coordY / framesCount;
      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});