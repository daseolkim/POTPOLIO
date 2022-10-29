$("document").ready(function(){
    $('#nav').click(function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
    });

})