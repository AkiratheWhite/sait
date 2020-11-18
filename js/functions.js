function showAbout(){
	var selected = document.getElementById("about");
	//Finds the element we want to show and returns it as an object.
	var blurred = document.querySelectorAll(".field");
	//Finds all elements with the class "field" and returns as a NodeList object.
	var button = document.getElementById("aboutButton")
	var blurredButtons = document.querySelectorAll(".button");

	for (i = 0; i < blurred.length; i++) {
		blurred[i].style.display = "none";
	}
	
	for (i = 0; i < blurredButtons.length; i++) {
		blurredButtons[i].classList.remove("button-active")
	 //Using a for loop, sets the display style of all "field" elements to "none".
	}

	selected.style.display = "block";
	button.classList.add("button-active")
	//Sets the display style of "flex" for the element we want to show.
}

function showContact() {
	var selected = document.getElementById("contact");
	//Finds the element we want to show and returns it as an object.
	var blurred = document.querySelectorAll(".field");
	//Finds all elements with the class "field" and returns as a NodeList object.
	var button = document.getElementById("contactButton")
	var blurredButtons = document.querySelectorAll(".button");

	for (i = 0; i < blurred.length; i++) {
		blurred[i].style.display = "none";
	}
	
	for (i = 0; i < blurredButtons.length; i++) {
		blurredButtons[i].classList.remove("button-active")
	 //Using a for loop, sets the display style of all "field" elements to "none".
	}
	selected.style.display = "block";
	button.classList.add("button-active")
	//Sets the display style of "flex" for the element we want to show.
}

function showRegister() {
	var selected = document.getElementById("register");
	//Finds the element we want to show and returns it as an object.
	var blurred = document.querySelectorAll(".field");
	//Finds all elements with the class "field" and returns as a NodeList object.
	var button = document.getElementById("registerButton")
	var blurredButtons = document.querySelectorAll(".button");

	for (i = 0; i < blurred.length; i++) {
		blurred[i].style.display = "none";
	}

	for (i = 0; i < blurredButtons.length; i++) {
		blurredButtons[i].classList.remove("button-active")
	 //Using a for loop, sets the display style of all "field" elements to "none".
	}
	selected.style.display = "block";
	button.classList.add("button-active")
	//Sets the display style of "flex" for the element we want to show.
}