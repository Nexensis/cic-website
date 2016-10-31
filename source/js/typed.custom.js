//Typed text on main page

$(function(){ 
    
    if ($(window).width() >= 768){

    $(function(){            
        $(".element").typed({
            strings: ["^200 DESIGN^700", "^200 PHOTOGRAPHY^700", "^200 VIDEO^700", "^200 CGI^800", "^200 PRODUCT^700", "^200 EVERYTHING^700"],
            typeSpeed: 60,
            backSpeed: 20,
            callback: function() {
                $(".typed-cursor").css({"opacity": "0","-webkit-animation": "none","-moz-animation": "none","animation": "none",})
            }

        });
    });

    } else {

        var screenHeight = $(window).height();        
        var screenWidth = $(window).width();        

        if ($(window).width() >= $(window).height()){ 

            $(function(){
                $("video").css({"height": screenWidth*0.8, "min-height": screenWidth*0.8, "max-height": screenHeight,})            
                $("header").css({"height": screenWidth*0.8, "min-height": screenWidth*0.8, "max-height": screenHeight,})            
            })  

        } else {

             $(function(){
                $("video").css({"height": screenHeight, "min-height": screenHeight, "max-height": screenHeight,})            
                $("header").css({"height": screenHeight, "min-height": screenHeight, "max-height": screenHeight,}) 
                $("#full-screen-video").css({"height": screenHeight, "min-height": screenHeight, "max-height": screenHeight,})            
            }) 

        }

        $(function(){            
            $(".element-mobile").typed({
                strings: ["^200DESIGN^700", "^200PHOTOGRAPHY^700", "^200VIDEO^700", "^200CGI^800", "^200PRODUCT^700", "^200EVERYTHING^700"],
                typeSpeed: 60,
                backSpeed: 20,
                callback: function() {
                    $(".typed-cursor").css({"opacity": "0","-webkit-animation": "none","-moz-animation": "none","animation": "none",})
                }

            });
        });             
    }
})