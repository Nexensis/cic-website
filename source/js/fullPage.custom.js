<!-- Fullscreen.js custom JS -->

    $(function() {
            
            var screenWidth = $(window).width();
            
            if (screenWidth <= 1024) { 
                $('#main-panel-video').attr('poster', 'img/cic-showreel-loop-still-mobile.jpg');
                $('#design-panel-video').attr('poster', 'img/portfolio/service-design/service-design-video-cover-mobile.jpg');
                $('#photo-panel-video').attr('poster', 'img/portfolio/service-photo/service-photo-video-cover-mobile.jpg');
                $('#cgi-panel-video').attr('poster', 'img/portfolio/service-cgi/cgi-section-cover-mobile.jpg');
                $('#product-panel-video').attr('poster', 'img/portfolio/service-product/service-product-video-cover-mobile.jpg');
            }
    });
    
    $(function() {
                        
            var screenHeight = $(window).height(); 
            var screenWidth = $(window).width(); 

            $('#fullpage').fullpage({
                anchors: ['main', 'service', 'design', 'photo', 'video', 'cgi', 'product', 'china'],
                continuousVertical: false,
            }); 
            
            
            $(".section").css({"height": screenHeight});
            $("#services").css({"height": screenHeight});
            $(".full-page-video-holder").css({"height": screenHeight});
            $(".about-container").css({"height": screenHeight});
                     
            if (screenWidth >= 767) {
                $(hideText);
                $(checkForChangesServicesShow);
                $(checkForChangesServicesColors); 
            } else {
                $(navbarLogo);
                $(navbarAffix);
            }
        });
        
        function hideText() {
            $('.service-section-header-design').addClass('hide')
            $('.service-section-header-photo').addClass('hide')
            $('.service-section-header-video').addClass('hide')
            $('.service-section-header-cgi').addClass('hide')
            $('.service-section-header-product').addClass('hide')
            $('.service-section-header-china').addClass('hide')
            $('.about-container').addClass('hide')
            $('.header-content-inner').addClass('hide')
            $('.services-scroller').addClass('hide')
            
        }
        
        function checkForChangesServicesShow() {
            
            if ($('#page-top').hasClass('fp-viewing-main'))
                $('.services-menu').fadeOut(200),
                $('.navbar-brand').removeClass('show')
                
            else
                $('.services-menu').fadeIn(500),
                $('.navbar-brand').addClass('show')
                
                setTimeout(checkForChangesServicesShow, 200);
        }
        
        function navbarLogo() {
            
            if ($('#page-top').hasClass('fp-viewing-main'))
                $('.navbar-brand').removeClass('show')
                
            else
                $('.navbar-brand').addClass('show')
                setTimeout(navbarLogo, 200);
            
        }
        
        function navbarAffix() {
                            
            if ($('#page-top').hasClass('fp-viewing-service'))
                $('#mainNav').addClass('affix'),
                $('.navbar-brand div').addClass('main-logo')
                
            else
                $('#mainNav').removeClass('affix'),
                $('.navbar-brand div').removeClass('main-logo')
                
                setTimeout(navbarAffix, 300);
        }
        
        function checkForChangesServicesColors() {   
                                
            if ($('#page-top').hasClass('fp-viewing-service'))
                $('.about-container').addClass('show'),
                $('.header-content-inner').removeClass('show'),
                $('.color-icons-nav .color-icon-service').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-design').removeClass('show')
                                
            else if ($('#page-top').hasClass('fp-viewing-design'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-design').addClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.service-section-header-china').removeClass('show'),
                $('.about-container').removeClass('show')
                
            else if ($('#page-top').hasClass('fp-viewing-photo'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-photo').addClass('show'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.service-section-header-china').removeClass('show'),
                $('.about-container').removeClass('show')
                
            else if ($('#page-top').hasClass('fp-viewing-video'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-video').addClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.about-container').removeClass('show')
                
            else if ($('#page-top').hasClass('fp-viewing-cgi'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-cgi').addClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.service-section-header-china').removeClass('show'),
                $('.about-container').removeClass('show')
                
            else if ($('#page-top').hasClass('fp-viewing-product'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').addClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').removeClass('color-icon-border'),
                $('.services-scroller').removeClass('hide'),
                $('.service-section-header-product').addClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-china').removeClass('show'),
                $('.header-content-inner').removeClass('show'),
                $('#footer').addClass('hide'),
                $('.about-container').removeClass('show')
                
            else if ($('#page-top').hasClass('fp-viewing-china'))
                $('.color-icons-nav .color-icon-service').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-product').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-photo').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-video').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-cgi').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-design').removeClass('color-icon-border'),
                $('.color-icons-nav .color-icon-china').addClass('color-icon-border'),
                $('.service-section-header-china').addClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.header-content-inner').removeClass('show'),
                $('.about-container').removeClass('show'),
                $('#footer').removeClass('hide')
                
            else 
                $('.header-content-inner').addClass('show'),
                $('.services-scroller').addClass('hide'),
                $('#footer').addClass('hide'),
                $('.service-section-header-design').removeClass('show'),
                $('.service-section-header-photo').removeClass('show'),
                $('.service-section-header-video').removeClass('show'),
                $('.service-section-header-cgi').removeClass('show'),
                $('.service-section-header-product').removeClass('show'),
                $('.service-section-header-china').removeClass('show'),
                $('.about-container').removeClass('show')
                
                setTimeout(checkForChangesServicesColors, 200);
        }
        
        $(function() { 
            var screenHeight = $(window).height(); 
            var screenWidth = $(window).width(); 
            if (screenHeight < 640 && screenWidth > 768) {
                $(".services-list").css({"display": 'none'});
                $(".page-scroller").css({"display": 'none'});
            }
        });                      
                         
        $(window).resize(function() {
              
            var screenHeight = $(window).height(); 
            var screenWidth = $(window).width(); 

            $("#services").css({"height": screenHeight});
            $(".full-page-video-holder").css({"height": screenHeight});
            $(".about-container").css({"height": screenHeight});
            
            if (screenHeight < 640 && screenWidth >= 768) {
                $(".services-list").css({"display": 'none'});
            } else {
                $(".services-list").css({"display": 'inline-block'}); 
            }
                
            if (screenHeight < 640 && screenWidth >= 768) {
                $(".page-scroller").css({"display": 'none'});
                $(".color-icons").css({"display": 'none'});
            } else {
                $(".page-scroller").css({"display": 'inline-block'}); 
                $(".color-icons").css({"display": 'block'}); 
            }
                
        });