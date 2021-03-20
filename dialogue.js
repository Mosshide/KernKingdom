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