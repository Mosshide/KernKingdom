const buildingSize = 1000;
const buildingPadding = 50;

let buildingTypes = ["New", "Castle", "Settlement", "Dungeon"];
class Building {
  /**
   * @description Initializes this building and positions/sizes it.
   * @param {boolean} active Should this be visible or doing anything?
   * @param {string} type What type of building is this?
   * @param {Element} div This is the corresponding html element.
   * @param {integer} xOrder Which building this is. Used to position it.
   */
  constructor(active, type, div, xOrder) {
    this.active = active;
    this.type = type;
    this.div = div;
    div.style.left = ((buildingSize + buildingPadding) * xOrder  + buildingPadding).toString() + "px";
    div.style.width = buildingSize.toString() + "px";
    this.popup = null;
    this.popupGold = 0;
    this.buildingParts = [];
    for (let i = 0; i < this.div.querySelectorAll(".building-part").length; i++) {
        this.buildingParts.push(new BuildingPart(this.div.querySelectorAll(".building-part").length[i]));
    }
  }

  update() {
      for (let i = 0; i < this.buildingParts.length; i++) {
        this.buildingParts[i].update();
      }
  }
}

//set up buildings
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".castle"), 0)];
document.querySelector(".building-button").addEventListener('click', function(e) {
	if (buildings[0].popup === null || buildings[0].popup === undefined || buildings[0].popup.dead === true) {
    popupGold = 0;
    buildings[0].popup = popupManager.create(new Popup("img/gold.png", "Found Gold!", "", 3000, 400, -700, 175, 50, buildings[0].div));
  }
  else {
    popupGold++;
    buildings[0].popup.set("img/gold.png", "Found " + popupGold.toString() + " Gold!", "", 3000, 400, -700, 180 + (popupGold.toString().length * 10), 50);
  }
  player.gainGold(1);
});
let newBuilding = new Building(true, buildingTypes[0], document.querySelector(".new-building"), buildings.length);

//make space
document.querySelector("#sky").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;
document.querySelector("#ground").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;