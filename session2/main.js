function getColorExcluding(excluding_color) {
    var color_set = ['rgb(255, 0, 0)', 'rgb(255, 128, 0)' , 'rgb(0, 128, 0)'];
    var res_color = color_set[Math.floor(Math.random() * 3)];

    while( res_color == excluding_color ) {
        res_color = color_set[Math.floor(Math.random() * 3)];
    }

    return res_color;
}



$(document).ready(function() {
    var rect_showed = false;
    var counter_open = 0;

    $("#counter").text(counter_open);
    $("#show-hide-rect").click(function() {
        if ( rect_showed == false ) {
            $("#hint").hide();
            $("#rectangle").css("backgroundColor", "green").animate({height: "200px",
                                     borderWidth: "1px"});
            rect_showed = true;
            counter_open += 1;
            $("#counter").text(counter_open);
        } else {
            $("#rectangle").animate({height: "0px",
                                 borderWidth: "0px"});
            rect_showed = false;
        }
    });

    $("#show-msg-change-color").click(function() {
        if ( rect_showed == false ) {
            $("#hint").show();
        }
        else {
            var $rect = $("#rectangle");
            var color = getColorExcluding($rect.css("backgroundColor"));

            $rect.css("backgroundColor", color);
        }
    });
});