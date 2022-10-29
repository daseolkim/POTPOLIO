$("document").ready(function(){

    function skill(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 4,
            trailWidth:4,
            color: "#fcca31",
            duration: 1400,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100)+ "%")
            }
        })
        bar.animate(per)
    }

    skill("#ps" , 0.9)
    skill("#ai" , 0.85)
    skill("#vs" ,0.7)
    skill("#pr" , 0.65),

    $(".top").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
    })

    const swiper = new Swiper(".swiper.moment-bottom", {
        autoplay: {
            delay:1500
        },
        slidesPerView: 3.8,
        spaceBetween: 50,
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true
        },
        centeredSlides: true,
        freeMode: true
    })


});

