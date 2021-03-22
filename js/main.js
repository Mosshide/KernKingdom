//set up player
let player = new Player(0);

//set up buildings
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".castle"), 0)];
let newBuilding = new Building(true, buildingTypes[0], document.querySelector(".newBuilding"), buildings.length);
document.querySelector("#sky").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;

//set up dialogue
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
dialogue.set("img/kern.png", "Kern Baby", "Baby Kern, in a forest.")
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