const buildingSize = 1000;
const buildingPadding = 50;

let buildingTypes = ["New", "Castle", "Settlement", "Dungeon"];
class Building {
  /**
   * @description Initializes this building and positions/sizes it.
   * @param {boolean} active Should this be visible or doing anything?
   * @param {string} type What type of building is this?
   * @param {Element} $div This is the corresponding html element.
   * @param {integer} xOrder Which building this is. Used to position it.
   */
  constructor(active, type, $div, xOrder) {
    this.active = active;
    this.type = type;
    this.$div = $div;
    $div.css("left", ((buildingSize + buildingPadding) * xOrder  + buildingPadding).toString() + "px");
    $div.css("width", buildingSize.toString() + "px");
    this.popup = null;
    this.popupGold = 0;
    this.buildingParts = [];
    for (let i = 0; i < this.$div.children(".building-part").length; i++) {
        this.buildingParts.push(new BuildingPart(this.div.children(".building-part").eq(i)));
    }
  }

  update() {
      for (let i = 0; i < this.buildingParts.length; i++) {
        this.buildingParts[i].update();
      }
  }
}

//set up buildings
let buildings = [new Building(true, buildingTypes[1], $(".castle"), 0)];

$(".building-button").on('click', function(e) {
	if (buildings[0].popup === null || buildings[0].popup === undefined || buildings[0].popup.dead === true) {
    popupGold = 0;
    buildings[0].popup = popupManager.create(new Popup("img/gold.png", "Found Gold!", "", 3000, 400, -700, 175, 50, 
      buildings[0].$div));
  }
  else {
    popupGold++;
    buildings[0].popup.set("img/gold.png", "Found " + popupGold.toString() + " Gold!", "", 3000, 400, -700, 
      180 + (popupGold.toString().length * 10), 50);
  }
  player.gainGold(1);
});

let newBuilding = new Building(true, buildingTypes[0], $(".new-building"), buildings.length);

//make space
$("#sky").css("width", (buildings.length + 1) * (buildingSize + buildingPadding) + 500);
$("#ground").css("width", (buildings.length + 1) * (buildingSize + buildingPadding) + 500);