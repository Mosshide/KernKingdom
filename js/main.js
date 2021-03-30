dialogueBox.set(0, 0);
dialogueBox.show();

document.querySelector(".save-button").addEventListener('click', function(e) {
	popupManager.create(new Popup("", "Saved!", "", 1000, -80, -15, 75, 30, e.target));
});
document.querySelector(".gold-button").addEventListener('click', function(e) {
	popupManager.create(new Popup("", "Your Gold", "You have " + player.gold.toString() + " gold.", 3000, 60, 50, 150, 50, e.target));
});


//define game loop
const update = function() {
	timing.update();
	
	for (let i = 0; i < buildings.length; i++) {
		buildings[i].update();
	}
	popupManager.update();
	player.update();
	dialogueBox.update();
}

//run game loop
setInterval(update, 1000 / timing.fps);