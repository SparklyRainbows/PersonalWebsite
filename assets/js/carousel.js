let carouselWidth = 1000; 

let prevButton = document.getElementsByClassName("button-previous");
let nextButton = document.getElementsByClassName("button-next");
let imageRow = document.getElementsByClassName("carousel-image-row");

var imageNums = Array(imageRow.length).fill(0);

function showNextImage(index) {
    index--;
    imageNums[index]++;
	let offset = -carouselWidth * imageNums[index];
    imageRow[index].style.left = offset + "px";

	checkControls(index);
}

for (var i = 0; i < imageRow.length; i++) {
    nextButton[i].onclick = function() {
        console.log("next " + i);
        showNextImage(i);
    }

    prevButton[i].onclick = function() {
        console.log("prev " + i);
        showPrevImage(i);
    }
}

function showPrevImage(index) {
    index--;
    imageNums[index]--;
	let offset = -carouselWidth * imageNums[index];
    imageRow[index].style.left = offset + "px";

	checkControls(index);
}

let totalImages = Array(imageRow.length);
for (var i = 0; i < imageRow.length; i++) {
    totalImages[i] = imageRow[i].childElementCount - 1;

    if (!prevButton[i].classList.contains("hidden")) {
        prevButton[i].classList.add("hidden");
    }
}

function checkControls(index) {
	if (imageNums[index] == 0) {
		prevButton[index].classList.add("hidden");
	}
	else if (prevButton[index].classList.contains("hidden")) {
		prevButton[index].classList.remove("hidden");
    }
    
	if (imageNums[index] >= totalImages[index]) {
		nextButton[index].classList.add("hidden");
	}
	else if (nextButton[index].classList.contains("hidden")) {
		nextButton[index].classList.remove("hidden");
	}
}
