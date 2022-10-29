$("document").ready(function(){
$(function(){
    $(".close-btn").click(function(){
        $(".popup").fadeOut(200);
        $(".overlay").fadeOut(200);
    })
        $(".overlay").click(function(){
            $(this).fadeOut(200);
            $(".popup").fadeOut(200);
        })
        $(".close-btn02").click(function(){
            $(".popup").fadeOut(200);
            $(".overlay").fadeOut(200);
        })
    })
$(".album").click(function () { 
        $(".spin").fadeToggle();
    });
// 레코드 돌아가게하기
    new Propeller(document.getElementById('spin'), {
        inertia: 0.99,
        onDragStop: function() {
            console.log('stop');
        },
        onDragStart: function () {
            console.log('start');
        }
    });
    
    

})





















