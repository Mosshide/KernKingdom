dialogueBox.set(0, 0);
dialogueBox.show();

let deltaTime = Date.now();
let lastTime = deltaTime;

//define game loop
const update = function() {
	deltaTime = Date.now() - lastTime;
	lastTime = Date.now();
	
	player.update(deltaTime);
	dialogueBox.update(deltaTime);
}

//run game loop
setInterval(update, 100);