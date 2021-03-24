class Player {
    /**
     * @description Initialize the player with some amount of gold.
     * @param {number} gold 
     */
    constructor(gold) {
        this.gold = gold;
        this.goldAmountText = document.querySelector(".gold-amount");
    }

    /**
     * 
     * @param {number} gold 
     */
    spendGold(gold) {
        this.gold -= Math.floor(gold);
    }

    /**
     * 
     * @param {number} gold 
     */
    gainGold(gold) {
        this.gold += Math.floor(gold);
    }

    /**
     * 
     * @param {number} delta Time since last update.
     */
    update(delta) {
	    this.goldAmountText.innerHTML = this.gold.toString();
    }
}
let player = new Player(0);