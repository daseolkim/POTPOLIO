$("document").ready(function(){

$("#design1").click(function () { 
$(".design-img1").fadeToggle()
});
$("#design2").click(function () { 
$(".design-img2").fadeToggle()
});


        $("#design-img").click(function() { 
                let i = $(this).index();
                $(".window").slideDown();
                $(".window-content").slideDown()
                $(".window-content img")
        })
        $("#event-img").click(function() { 
                let i = $(this).index();
                $(".window").slideDown();
                $(".window-content").slideDown()
                $(".window-content img")
        })
        $("#fair-img").click(function() { 
                let i = $(this).index();
                $(".window").slideDown();
                $(".window-content").slideDown()
                $(".window-content img")
        })
        $("#package-img").click(function() { 
                let i = $(this).index();
                $(".window").slideDown();
                $(".window-content").slideDown()
                $(".window-content img")
        })
        $("#page-img").click(function() { 
                let i = $(this).index();
                $(".window").slideDown();
                $(".window-content").slideDown()
                $(".window-content img")
        })

        // 모달창 닫기
        $(".modal-close").click(function(){
                $(".window-content").hide()
                $(".window").hide()
        })
        $(".window").click(function(){
                $(".window-content").hide()
                $(".window").hide()
        
        });




})