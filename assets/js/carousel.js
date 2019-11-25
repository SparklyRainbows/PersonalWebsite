let carouselWidth = 1000; 

let games = [
    'quickdraw',
    'osborneodyssey',
    'arcticadventures'
];

let prevButtonSuffix = "-prev";
let nextButtonSuffix = "-next";
let imageRowSuffix = "-image-row";

var imageNums = {
    'quickdraw': 0,
    'osborneodyssey': 0,
    'arcticadventures': 0,
  };

function showNextImage(game) {
    imageNums[game]++;
	let offset = -carouselWidth * imageNums[game];
    document.getElementById(game + imageRowSuffix).style.left = offset + "px";

	checkControls(game);
}

document.getElementById(games[0] + nextButtonSuffix).onclick = function() {
    showNextImage(games[0]);
}

document.getElementById(games[1] + nextButtonSuffix).onclick = function() {
    showNextImage(games[1]);
}

document.getElementById(games[2] + nextButtonSuffix).onclick = function() {
    showNextImage(games[2]);
}

document.getElementById(games[0] + prevButtonSuffix).onclick = function() {
    showPrevImage(games[0]);
}

document.getElementById(games[1] + prevButtonSuffix).onclick = function() {
    showPrevImage(games[1]);
}

document.getElementById(games[2] + prevButtonSuffix).onclick = function() {
    showPrevImage(games[2]);
}

function showPrevImage(game) {
    imageNums[game]--;
	let offset = -carouselWidth * imageNums[game];
    document.getElementById(game + imageRowSuffix).style.left = offset + "px";

	checkControls(game);
}

var totalImages = {};

for(var i = 0; i < games.length; i++) {
    totalImages[games[i]] = document.getElementById(games[i] + imageRowSuffix).childElementCount - 1;
    
    if (!document.getElementById(games[i] + prevButtonSuffix).classList.contains("hidden")) {
        document.getElementById(games[i] + prevButtonSuffix).classList.add("hidden");
    }
}

function checkControls(game) {
	if (imageNums[game] == 0) {
		document.getElementById(game + prevButtonSuffix).classList.add("hidden");
	}
	else if (document.getElementById(game + prevButtonSuffix).classList.contains("hidden")) {
		document.getElementById(game + prevButtonSuffix).classList.remove("hidden");
    }
    
	if (imageNums[game] >= totalImages[game]) {
		document.getElementById(game + nextButtonSuffix).classList.add("hidden");
	}
	else if (document.getElementById(game + nextButtonSuffix).classList.contains("hidden")) {
		document.getElementById(game + nextButtonSuffix).classList.remove("hidden");
	}
}
