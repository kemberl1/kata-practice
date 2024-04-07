document.addEventListener("DOMContentLoaded", function () {
console.log('DOM загружен');
let swiperInstance = null; // Хранилище экземпляра Swiper

function checkScreenWidth() {
  if (window.innerWidth > 760) {
    if (swiperInstance) {
      console.log('swiper полностью удален');
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  } else {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 16,
        slideToClickedSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        allowTouchMove: true,
      });
    }
  }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

// show-more

  let brandsButton = document.querySelector('.brands__button');
  let brandsCardsList = document.querySelector('.brands__cards-list');

  brandsButton.addEventListener('click', function () {
    brandsButton.classList.toggle('brands__button--open');
    brandsCardsList.classList.toggle('brand__card-list--full'); 
    if (brandsButton.classList.contains('brands__button--open')) {
      brandsButton.textContent = 'Скрыть';
    } else {
      brandsButton.textContent = 'Показать всё';
    }
  });
  
});
