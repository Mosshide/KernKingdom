class Popup {
    /**
     * 
     * @param {string} icon Path to icon.
     * @param {string} title Popup title.
     * @param {string} info Popup extra information.
     * @param {number} left Parent of the new popup in px.
     * @param {number} bottom Parent of the new popup in px.
     * @param {number} width Width of the new popup in px.
     * @param {number} height Height of the new popup in px.
     * @param {Element} parent Parent of the new popup.
     */
    constructor(icon, title, info, time, left, bottom, width, height, parent) {
        this.$popup = $("#popup-0");
        this.$popup = this.$popup.clone();
        parent.append(this.$popup);
        this.$icon = this.$popup.children().eq(0);
        this.$title = this.$popup.children().eq(1);
        this.$info = this.$popup.children().eq(2);
        this.dead = false;
        this.$popup.css("display", "flex");
        this.set(icon, title, info, time, left, bottom, width, height);
    }

    /**
     * @description Prints the contents of this dialogue.
     */
    print() {
        console.log(this.icon);
        console.log(this.title);
        console.log(this.info);
    }

    /**
     * 
     */
     update() {
        if (!this.dead) {
            this.time -= timing.deltaTime;
            if (this.time < 0) {
                this.time = 0;
                this.$popup.remove();
                this.dead = true;
            }
        }
    }

    /**
     * 
     * @param {string} icon Path to icon.
     * @param {string} title Popup title.
     * @param {string} info Popup extra information.
     * @param {number} left Parent of the new popup in px.
     * @param {number} bottom Parent of the new popup in px.
     * @param {number} width Width of the new popup in px.
     * @param {number} height Height of the new popup in px.
     */
    set (icon, title, info, time, left, bottom, width, height) {
        this.$popup.css("left", left.toString() + "px");
        this.$popup.css("bottom", bottom.toString() + "px");
        this.$popup.css("width", width.toString() + "px");
        this.$popup.css("height", height.toString() + "px");
        this.$icon.attr("src", icon);
        this.$title.html(title);
        this.$info.html(info);
        this.time = time;
        if (icon === "") this.$icon.css("display", "none");
    }
}

class PopupManager {
    /**
     * @description Grabs relevant elements from html. Loads dialogue data. Gives buttons functionality.
     */
    constructor() {
        this.popups = [];
    }

    /**
     * @description Checks for dead popups for cleaning.
     */
    update() {
        for (let i = 0; i < this.popups.length; i++) {
            this.popups[i].update(timing.deltaTime);
            if (this.popups[i].dead) 
            {
                this.popups.splice(i, 1);
                i--;
            }
        }
    }

    /**
     * 
     * @param {Popup} popup Add a new popup to the manager for automatic clean up.
     */
    create(popup) {
        this.popups.push(popup);
        return popup;
    }
}
let popupManager = new PopupManager();