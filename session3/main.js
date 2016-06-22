$(document).ready(function() {
    var isAnimated = false;

    $( window ).scroll(function(event) {
        var st = $(this).scrollTop();
        if ( st > 100 && isAnimated == false ) {
            $("#header").animate({height: "70px"}).css({"background": "rgba(0, 0, 0, 1)"});
//            $("#header").animate({height: "70px"});
            isAnimated = true;
        } else if ( st <= 100 && isAnimated == true ) {
            $("#header").css({"background": "rgba(0, 0, 0, 0.4)", "height": "94px"});
//            $("#header").css({"height": "94px"});
//            $(".navbar-right").css({"opacity": 1});
            isAnimated = false;
        }

    });

    var h = $("#bgvideo2").css("height");
    $("#subheader").css("height", h);

    $(".dropdown").click(function() {
//        $(this).preventDefault();
        return false;
    });

    $(".dropdown-submenu a").append("<span class='glyphicon glyphicon-chevron-right'></span>");

    $("#owl-demo").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
//        singleItem:true

        // "singleItem:true" is a shortcut for:
         items : 1,
         itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false

    });
});
