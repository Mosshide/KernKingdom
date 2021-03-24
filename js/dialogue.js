class Dialogue {
    /**
     * 
     * @param {string} pic Path to image of speaker.
     * @param {string} name Name of the speaker.
     * @param {Array.<string>} text What the speaker is saying.
     */
    constructor(pic, name, text) {
        this.pic = pic;
        this.name = name;
        this.text = text;
    }

    /**
     * @description Prints the contents of this dialogue.
     */
    print() {
        console.log(this.pic);
        console.log(this.name);
        console.log(this.text);
    }
}

class DialogueBox {
    /**
     * @description Grabs relevant elements from html. Loads dialogue data. Gives buttons functionality.
     */
    constructor() {
        this.boxElement = document.querySelector(".dialogue-box");
        this.picElement = document.querySelector(".dialogue-pic");
        this.nameElement = document.querySelector(".dialogue-name");
        this.textElement = document.querySelector(".dialogue-text");
        this.exitButton = document.querySelector("#dialogue-exit");
        this.exitButton.addEventListener('click', function(e) {
            dialogueBox.hide();
        });
        this.nextButton = document.querySelector("#dialogue-next");
        this.nextButton.addEventListener('click', function(e) {
            dialogueBox.increment();
        });
        this.prevButton = document.querySelector("#dialogue-prev");
        this.prevButton.addEventListener('click', function(e) {
            dialogueBox.decrement();
        });
        this.prevButton.style.display = "none";
        this.currentDialogue = -1;
        this.currentLine = -1;
        this.time = 0;
        this.tick = false;
        this.dialogues = [];
    }

    /**
     * 
     * @param {number} delta Time since last update.
     */
    update(delta) {
        if (this.tick) {
            this.time -= delta;
            if (this.time < 0) {
                this.time = 0;
                this.hide();
            }
        }
    }

    /**
     * @description Prevents overflow and makes buttons react.
     */
     normalizeIndexes(dialogue, line) {
        if (dialogue <= 0)  dialogue = 0;
        if (dialogue >= this.dialogues.length - 1)  dialogue = this.dialogues.length - 1;

        this.nextButton.style.display = "initial";
        this.prevButton.style.display = "initial";
        if (line <= 0) {
            line = 0;
            this.prevButton.style.display = "none";
        }
        if (line >= this.dialogues[dialogue].text.length - 1) {
            line = this.dialogues[dialogue].text.length - 1;
            this.nextButton.style.display = "none";
        }

        this.currentDialogue = dialogue;
        this.currentLine = line;
    }

    /**
     * 
     * @param {number} fromWhich Which dialogue to copy values from.
     * @param {number} line Which line to copy from.
     */
    set(dialogue, line) {
        this.normalizeIndexes(dialogue, line);

        this.picElement.setAttribute("src", this.dialogues[this.currentDialogue].pic);
        this.nameElement.innerHTML = this.dialogues[this.currentDialogue].name;
        this.textElement.innerHTML = this.dialogues[this.currentDialogue].text[this.currentLine];
    }

    /**
     * @description Shows the whole dialogue box.
     * @param {number} time How many milliseconds to show the box. Negative inputs show the box indefinitely. Default is -1. 
     */
    show(time = -1) {
        this.boxElement.style.display = "initial";
        if (time > 0) {
            this.time = time;
            this.tick = true;
        }
    }

    /**
     * @description Hides the whole dialogue box.
     */
    hide() {
        this.boxElement.style.display = "none";
        this.tick = false;
    }

    /**
     * @description Sets the dialogue box to the next dialogue.
     */
    increment() {
        this.currentLine++;
        this.set(this.currentDialogue, this.currentLine);
    }

    /**
     * @description Sets the dialogue box to the previous dialogue.
     */
    decrement() {
        this.currentLine--;
        this.set(this.currentDialogue, this.currentLine);
    }
}

//set up dialogueBox
let dialogueBox = new DialogueBox();