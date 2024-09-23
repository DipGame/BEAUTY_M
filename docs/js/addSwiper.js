document.addEventListener("DOMContentLoaded", function () {

    let banerMainSwiper = new Swiper(".banerMainSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1200,
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: ".banerMainSwiper-button-next",
            prevEl: ".banerMainSwiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        // breakpoints: {
        //     300: {
        //         slidesPerView: 1,
        //         spaceBetween: 30
        //     },
        //     1044: {
        //         slidesPerView: 2,
        //         spaceBetween: 30
        //     },
        //     1636: {
        //         slidesPerView: 3,
        //         spaceBetween: 30
        //     }
        // }
    });

    console.log('addSwiper.js finish work');
});