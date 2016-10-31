var screenHeight = $(window).height();
    $(function(){
        screenHeight = $(window).height();
        $("#case-study-header").css({"margin-top": screenHeight * 0.7 * 0.2,})      
    })         
    $( window ).resize(function(){
        if ($(window).width() > 768){
            screenHeight = $(window).height();
            $("#case-study-header").css({"margin-top": screenHeight * 0.7 * 0.2,})    
        } else {}
    })

if ($(window).width() <= 768){
    $(function(){
        $(".case-study-top").css({"height": screenHeight * 0.8,})
        $("#case-study-header").css({"margin-top": screenHeight * 0.7 * 0.2,})
    })    
} else {
}