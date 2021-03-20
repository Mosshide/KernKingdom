//Set up player information
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

//set up building information
const buildingSize = 1000;
const buildingPadding = 50;
let buildingTypes = ["New", "Castle", "Settlement", "Dungeon"];
class Building {
  constructor(active, type, div, xOrder) {
    this.active = active;
    this.type = type;
    this.div = div;
    div.style.left = ((buildingSize + buildingPadding) * xOrder  + buildingPadding).toString() + "px";
    div.style.width = buildingSize.toString() + "px";
  }
}

//set up horizontal scrolling
window.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
	  document.documentElement.scrollTop -= e.deltaY;
	  document.documentElement.scrollLeft += e.deltaY;
  }
});

//set up globals
let running = true;
let player = new Player(0);
let goldAmountText = document.querySelector("#goldAmount");
let deltaTime = Date.now();
let lastTime = deltaTime;
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".castle"), 0)];
let newBuilding = new Building(true, buildingTypes[0], document.querySelector(".newBuilding"), buildings.length);
document.querySelector("#sky").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;

//define game loop
function update() {
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	
	player.gainGold(deltaTime / 100);
	goldAmountText.innerHTML = player.gold.toString();
}

//run game loop
setInterval(update, 100);