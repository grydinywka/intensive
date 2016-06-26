$(document).ready(function() {
    var isAnimated = false;
    new WOW().init();
    var wow1 = new WOW({
        boxClass:     'slogan',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });

    wow1.init();

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

//    $("#test").click(function(){
//    $("#slogan").css({"display": "none"}).delay(1800).fadeIn( 1800, function() {
//        alert("Success");
//    } );
//    $("#slogan").css({"opacity": 0}).animate({fontSize: "3em"});
//    });
});
