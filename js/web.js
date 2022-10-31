$("document").ready(function(){

$(".yslprocess").click(function() { 
        let i = $(this).index();

        // console.log(content_img[i])
        $(".window").slideDown();
        // $(".window").show();
        // $(".window").fadein();
        $(".window-content").slideDown()
        $(".window-content img")
})


$(".treeprocess").click(function() { 
        let i = $(this).index();

        // console.log(content_img[i])
        $(".window").slideDown();
        // $(".window").show();
        // $(".window").fadein();
        $(".window-content").slideDown()
        $(".window-content img")
}),        
$(".petprocess").click(function() { 
        let i = $(this).index();

        // console.log(content_img[i])
        $(".window").slideDown();
        // $(".window").show();
        // $(".window").fadein();
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

})





})