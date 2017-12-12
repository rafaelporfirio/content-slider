var bubblesContainer = document.getElementById("bubbles-container"),
	w_bubble = 15,
	h_bubble = 15,
	content = document.getElementById("content"),
	images = document.getElementById("images"),
	texts = document.getElementById("texts");

	content.setAttribute("class", "fadeIn");

function createBubbles() {

	loadImage(0);

    for (var i = 0; i < infoArr.length; i++) {


        var bubble = document.createElement("div");
        bubble.setAttribute("class", "bubble");
        bubble.style.width = w_bubble + "px";
        bubble.style.height = h_bubble + "px";
        bubblesContainer.appendChild(bubble);
        bubble.setAttribute("count", i);
        bubble.addEventListener("click", changeImage);

        if (infoArr.length > 1) {

            bubblesContainer.style.width = infoArr.length * 10 + "%";

        } else {
            bubblesContainer.style.width = 10 + "%";
        }
    }
}

function changeImage(event){

	var target = event.currentTarget;
	var index = target.getAttribute("count");
	loadImage(index);
};

function loadImage(index){
	var info = infoArr[index];
	images.src = "images/" + info.image;
	content.classList.toggle("fadeOut");
	texts.textContent = info.title;
}

createBubbles();