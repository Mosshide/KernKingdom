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