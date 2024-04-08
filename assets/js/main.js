document.addEventListener("DOMContentLoaded", function () {
  let swiperInstance = null; //экземпляр свайпера

  function checkScreenWidth() {
    if (window.innerWidth > 760) {
      if (swiperInstance) {
        console.log("swiper полностью удален");
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    } else {
      if (!swiperInstance) {
        swiperInstance = new Swiper(".swiper", {
          direction: "horizontal",
          loop: false,
          slidesPerView: "auto",
          spaceBetween: 16,
          slideToClickedSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
          allowTouchMove: true,
        });
      }
    }
  }
  window.addEventListener("load", checkScreenWidth);
  window.addEventListener("resize", checkScreenWidth);

  /*showMoreButton*/

  let showMoreButton = document.querySelector(".button__show-more");
  let showFull = document.querySelector(".content-container");

  showMoreButton.addEventListener("click", function () {
    showMoreButton.classList.toggle("button__show-more--open");
    showFull.classList.toggle("content-container-show--full");
    if (showMoreButton.classList.contains("button__show-more--open")) {
      showMoreButton.textContent = "Скрыть";
    } else {
      showMoreButton.textContent = "Показать всё";
    }
  });
});
