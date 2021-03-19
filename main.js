class Player {
  constructor(gold) {
    this.gold = gold;
  }
  
  spendGold(gold) {
    this.gold -= Math.floor(gold);
  }
  
  gainGold(gold) {
    this.gold += Math.floor(gold);
  }
}

const buildingSize = 1000;
const buildingPadding = 50;
let buildingTypes = ["New", "Castle", "Farm", "Dungeon"];
class Building {
  constructor(active, type, div, xOrder) {
    this.active = active;
    this.type = type;
    this.div = div;
    div.style.left = ((buildingSize + buildingPadding) * xOrder  + buildingPadding).toString() + "px";
    div.style.width = buildingSize.toString() + "px";
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