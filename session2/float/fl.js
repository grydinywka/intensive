function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(function() {
        currentheight = $(this).height();
        if ( currentheight > tallestcolumn ) {
            tallestcolumn = currentheight;
        }
    });
    columns.height(tallestcolumn);
}

$(document).ready(function() {
    setEqualHeight($("#sidebarL,#sidebarR,#content"));
    alert("Docum");
});