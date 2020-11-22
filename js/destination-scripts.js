//Declares a new object class. These will be used to store destinations.
//3 Inputs are accepted: name, description, package price, and the url we will use to display images.
class Dest {
	 constructor(name, desc, price, imgUrl) {
	 	this.name = name;
	 	this.desc = desc;
	 	this.price = price;
	 	this.imgUrl = imgUrl;
	 }
}

//Function to show the description of a travel destination.
function showDesc() {
	//Determines the ID of the parent node of the span selected.
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;


	try {
		var desc = document.querySelector("#" + parentId + "> div");
		desc.style.display = "block";
		//Finds the div tag within the parent tag. The div tag is used to contain the description.
	}
	
	//Error catcher to exit the function if no description is given.
	catch(err) {
	}
}

//Same as above function, but hides the description instead of showing it.
function hideDesc() {
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;
	
	try {
		var desc = document.querySelector("#" + parentId + "> div");
		desc.style.display = "none";
	}
	
	catch(err) {
	}
}

//Declaring 3 new objects to showcase the method.
var oahu = new Dest("Oahu", "Filler", "$499", "img/travel1.jpg");
var belieze = new Dest("Belieze", "Filler", "$699", "img/travel2.jpg")
var monte = new Dest("Monte Grappa", "Filler", "$399", "img/travel3.jpg" )

//Initializing an array to story all objects.
var destinations = [oahu, belieze, monte];

//Adds a table element to the travel images div.
document.querySelector("#travelImages").innerHTML = "<table></table>"

//Using a for loop, generate a table row to display the image of the destination in, along with the name.
for (i=0; i<3; i++) {
	//A table row element is added to the table.
	var node = document.createElement("TR");

	//Declares a variable to store the name of the destination. Converts to a lowercase form so that we can automatically populate the row ID.
	var name = destinations[i]["name"].toLowerCase();

	//Removes all white spaces so that there are no conflicts with CSS notation.
	var nodeId = name.replace(/\s/g,'');

	//Sets the ID of the table row to be equal to the name of the destination, minus white spaces and all lowercased.
	node.id = nodeId;

	var html = "<img src=\"" + destinations[i]["imgUrl"] + "\"/>"  + "<span>" + destinations[i]["name"] + "</span>" + "<div>" + destinations[i]["desc"] + "</div>";
	node.innerHTML = html;
	
	document.querySelector("#travelImages table").appendChild(node);

}

//Adds an event listener to display a description of the travel destination.
var elements = document.querySelectorAll("#travelImages table tr");

for (i=0; i<elements.length;i++) {
	elements[i].addEventListener("mouseover", showDesc);
	elements[i].addEventListener("mouseout", hideDesc);
}




