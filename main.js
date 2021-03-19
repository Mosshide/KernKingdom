class Player {
  constructor(g) {
    this.gold = g;
  }
  
  spendGold(g) {
    this.gold -= Math.floor(g);
  }
  
  gainGold(g) {
    this.gold += Math.floor(g);
  }
}

window.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
	  document.documentElement.scrollTop -= e.deltaY;
	  document.documentElement.scrollLeft += e.deltaY;
  }
});

let player = new Player(0);
let goldAmountText = document.querySelector("#goldAmount");
let running = true;
let deltaTime = Date.now();
let lastTime = deltaTime;

function update() {
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	
	player.gainGold(deltaTime / 100);
	goldAmountText.innerHTML = player.gold.toString();
}

setInterval(update, 100);