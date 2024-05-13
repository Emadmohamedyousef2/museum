$(document).ready(function() {

	$("#content-slider").lightSlider({
            loop:true,
            keyPress:true,
            item:1,
            auto:false
    });
    $("#slide-main-activity").lightSlider({
            loop:true,
            keyPress:true,
            item:1,
            auto:false
    });
    $("#second-slider").lightSlider({
            loop:true,
            keyPress:true,
            item:4,
            slideMargin:20,
            auto:false,
            responsive : [

            {
                breakpoint:767,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
    });
    $("form#searchform").mouseleave(function(){
        if (!$("input#search").val() == 0 ){
            $("input#search").addClass("search_open");
        }
        else {
            $("input#search").removeClass("search_open");
        }
    });
    $(".menu-mobile").click(function(){
        if ( $(this).hasClass("opend") ) {
          $("header .menu").animate({right:'-260px'},500);
          $("body").removeClass("menu-opend").animate({right:'0px'},500);
          $(this).removeClass("opend");

        }else{
          $("header .menu").animate({right:'0px'},500);
          $("header .menu").animate({right:'0px'},500);
          $("body").addClass("menu-opend").animate({right:'240px'},500);
          $(this).addClass("opend");
        };
    });

});