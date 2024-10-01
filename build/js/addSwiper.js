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
            el: ".banerMainSwiper-pagination",
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

    let stocksSwiper = new Swiper(".stocksSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1200,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".stocksSwiper-button-next",
            prevEl: ".stocksSwiper-button-prev",
        },
        pagination: {
            el: ".stocksSwiper-pagination",
        },
        breakpoints: {
            721: {
                slidesPerView: 2,
                spaceBetween: 25,
                centeredSlides: false,
            },
            971: {
                slidesPerView: 3,
                spaceBetween: 25,
                centeredSlides: false,
            }
        }
    });
    let feedbackSwiper = new Swiper(".feedbackSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1200,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".feedbackSwiper-button-next",
            prevEl: ".feedbackSwiper-button-prev",
        },
        pagination: {
            el: ".feedbackSwiper-pagination",
        },
        breakpoints: {
            471: {
                slidesPerView: 'auto',
                spaceBetween: 25,
                centeredSlides: false,
            }
        }
    });
    let beforeSwiper = new Swiper(".beforeSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1200,
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
    });

    console.log('addSwiper.js finish work');
});