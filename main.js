window.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) document.documentElement.scrollLeft += e.deltaY;
});