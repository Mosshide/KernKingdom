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
  }
}

//set up buildings
let buildings = [new Building(true, buildingTypes[1], document.querySelector(".castle"), 0)];
let newBuilding = new Building(true, buildingTypes[0], document.querySelector(".new-building"), buildings.length);
document.querySelector("#sky").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;
document.querySelector("#ground").style.width = (buildings.length + 1) * (buildingSize + buildingPadding) + 500;