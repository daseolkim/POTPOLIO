$("document").ready(function(){ 
    const swiper = new Swiper(".swiper.just-moment-bottom", {
        autoplay: {
            delay:1500
        },
        slidesPerView: 3.5,
        spaceBetween: 1,
        loop: true,
        navigation:{
            nextEl : ".swiper-button-next",
            prevEl : ".swiper-button-prev"
        },
        centeredSlides: true,
        freeMode: true
    })


})