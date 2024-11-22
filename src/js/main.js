(() => {
  document.addEventListener('DOMContentLoaded', (e) => {
    //страниц: каталог
    function catalogProcess() {
      const swiperCatalog = new Swiper('.catalog-product', {
        loop: false,
        spaceBetween: 32,
        slidesPerGroup: 3,
        slidesPerView: 3,
        autoHeight: false,
        grid: {
          rows: 3,
        },
        breakpoints: {
          320: {
            spaceBetween: 16,
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 3,
            },
            updateOnWindowResize: true,
          },
          576: {
            spaceBetween: 32,
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
              rows: 3,
            },
            updateOnWindowResize: true,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 3,
            },
          },
        },
        navigation: {
          nextEl: ".good__btn-next",
          prevEl: ".good__btn-prev",
          disabledClass: 'btn-icon--disabled',
        },
        pagination: {
          el: ".catalog-product__pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
    }
    catalogProcess();

  });
})()


