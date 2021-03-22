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