//set up horizontal scrolling
$("main").bind("mousewheel", function(e) {
    if (e.deltaY !== 0) {
        document.documentElement.scrollTop -= e.originalEvent.deltaY;
        document.documentElement.scrollLeft += e.originalEvent.deltaY;
    }
});