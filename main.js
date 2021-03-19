class Building {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  distance(a, b) {
    return Math.hypot(a, b);
  }
}

window.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
	  document.documentElement.scrollTop -= e.deltaY;
	  document.documentElement.scrollLeft += e.deltaY;
  }
});