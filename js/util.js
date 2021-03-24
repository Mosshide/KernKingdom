//set up horizontal scrolling
window.addEventListener('wheel', function(e) {
    if (e.deltaY !== 0) {
        document.documentElement.scrollTop -= e.deltaY;
        document.documentElement.scrollLeft += e.deltaY;
    }
});