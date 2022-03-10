$(function () {

    let thumb = new Swiper('.thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });


    // 스와이퍼 시작!
    let swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: thumb,
        },
    });



    


})