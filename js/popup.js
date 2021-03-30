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
        this.popupElement = document.querySelector(".popup");
        this.popupElement = this.popupElement.cloneNode(true);
        parent.appendChild(this.popupElement);
        this.iconElement = this.popupElement.children[0];
        this.titleElement = this.popupElement.children[1];
        this.infoElement = this.popupElement.children[2];
        this.dead = false;
        this.popupElement.style.display = "flex";
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
                this.popupElement.remove();
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
        this.popupElement.style.left = left.toString() + "px";
        this.popupElement.style.bottom = bottom.toString() + "px";
        this.popupElement.style.width = width.toString() + "px";
        this.popupElement.style.height = height.toString() + "px";
        this.iconElement.setAttribute("src", icon);
        this.titleElement.innerHTML = title;
        this.infoElement.innerHTML = info;
        this.time = time;
        if (icon === "") this.iconElement.style.display = "none";
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