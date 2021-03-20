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
let player = new Player(0);

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
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".castle"), 0)];
let newBuilding = new Building(true, buildingTypes[0], document.querySelector(".newBuilding"), buildings.length);
document.querySelector("#sky").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;

//set up dialogue
class Dialogue {
  constructor() {
    this.boxElement = document.querySelector(".dialogueBox");
    this.picElement = document.querySelector(".dialoguePic");
    this.nameElement = document.querySelector(".dialogueName");
    this.textElement = document.querySelector(".dialogue");
    this.time = 0;
    this.tick = false;
  }

  update(delta) {
    if (this.tick) {
      this.time -= delta;
      if (this.time < 0) {
        this.time = 0;
        this.hide();
      }
    }
  }

  set(pic, name, text) {
    this.picElement.setAttribute("src", pic);
    this.nameElement = document.querySelector(".dialogueName").innerHTML = name;
    this.textElement = document.querySelector(".dialogue").innerHTML = text;
  }

  show(time = -1) {
    this.boxElement.style.display = "initial";
    if (time > 0) {
      this.time = time;
      this.tick = true;
    }
  }

  hide() {
    this.boxElement.style.display = "none";
    this.tick = false;
  }
}
let dialogue = new Dialogue();
document.querySelector("#dialogueExit").addEventListener('click', function(e) {
  dialogue.hide();
});

//set up horizontal scrolling
window.addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
	  document.documentElement.scrollTop -= e.deltaY;
	  document.documentElement.scrollLeft += e.deltaY;
  }
});

//set up globals
let running = true;
let goldAmountText = document.querySelector("#goldAmount");
let deltaTime = Date.now();
let lastTime = deltaTime;

//test
dialogue.set("img/baby_kern_forest.png", "Kern Baby", "Baby Kern, in a forest.")
dialogue.show();

//define game loop
function update() {
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	
	player.gainGold(deltaTime / 100);
	goldAmountText.innerHTML = player.gold.toString();

  dialogue.update(deltaTime);
}

//run game loop
setInterval(update, 100);