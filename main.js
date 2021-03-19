class Player {
  constructor(g) {
    this.gold = g;
  }
  
  spendGold(gold) {
    this.gold -= Math.floor(g);
  }
  
  gainGold(gold) {
    this.gold += Math.floor(g);
  }
}

const buildingSize = 1000;
const buildingPadding = 50;
let buildingTypes = ["New", "Castle", "Farm", "Dungeon"];
class Building {
  constructor(active, type, div, xOrder) {
	this.active = active;
    this.type = t;
	this.div = d;
	div.setAttribute("left", (buildingSize + buildingPadding) * xOrder  + buildingPadding;
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
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".building"), 0)];
let newBuilding = [new Building(true, buildingTypes[0], document.querySelector(".newBuilding"), buildings.length)];

function update() {
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	
	player.gainGold(deltaTime / 100);
	goldAmountText.innerHTML = player.gold.toString();
}

setInterval(update, 100);