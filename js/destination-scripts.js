//Declares a new object class. These will be used to store destinations.
//3 Inputs are accepted: name, description, package price, and the url we will use to display images.
class Dest {
	constructor(name, desc, price, imgUrl, webUrl) {
		this.name = name;
		this.desc = desc;
		this.price = price;
		this.imgUrl = imgUrl;
		this.webUrl = webUrl;
	}
}

//Function to show the description of a travel destination.
function showDesc() {
	//Determines the ID of the parent node of the span selected.
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;


	try {
		var desc = document.querySelector("#" + parentId + "> div");
		//Finds the div tag within the parent tag. The div tag is used to contain the description.
		desc.style.visibility = "visible";
		desc.style.opacity = 1.0;
		//Sets the visiblity of the div tag to visible, and the opacity to 1.
	}
	
	//Error catcher to exit the function if no description is given.
	catch(err) {
	}
}

//Same as above function, but hides the description instead of showing it. Changes visibility to hidden and opacity to 0.
function hideDesc() {
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;
	
	try {
		var desc = document.querySelector("#" + parentId + "> div");
		desc.style.visibility = "hidden";
		desc.style.opacity = 0;
	}
	
	catch(err) {
	}
}

//Same as above, except it opens a link to the url specified by the destination.
function openWindow() {
	debugger;
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;
	
	try {
		var desc = document.querySelector("#" + parentId + "> a");
		myWindow = window.open(desc, "", "width=500, height = 250");
		//Creates a new window.
		setTimeout(function () {myWindow.close();}, 3000);
		//Closes the window after 3000 milliseconds.
	}
	
	catch(err) {
	}
}
//Declaring 3 new objects to showcase the method.
var oahu = new Dest("Oahu", "Oahu is a U.S. island in the Central Pacific, part of the Hawaiian island chain and home to the state capital, Honolulu. Highlights of the city include historic Chinatown and the Punchbowl, a crater-turned-cemetery. Waikiki is an iconic beach, dining and nightlife area.", "$499", "img/travel1.jpg", "https://www.gohawaii.com/islands/oahu");
var belieze = new Dest("Belieze", "Belize is a nation on the eastern coast of Central America, with Caribbean Sea shorelines to the east and dense jungle to the west. Offshore, the massive Belize Barrier Reef, dotted with hundreds of low-lying islands called cayes, hosts rich marine life. Belize’s jungle areas are home to Mayan ruins like Caracol, renowned for its towering pyramid; lagoon-side Lamanai; and Altun Ha, just outside Belize City.", "$699", "img/travel2.jpg", "https://www.travelbelize.org/");
var veneto = new Dest("Veneto", "Veneto is a northeastern Italian region stretching from the Dolomite Mountains to the Adriatic Sea. Venice, its regional capital, is famed for its canals, Gothic architecture and Carnival celebrations. Veneto was part of the powerful Venetian Republic for more than 1,000 years, between the 7th and 18th centuries. Near alpine Lake Garda, medieval Verona is known as the setting of Shakespeare's \"Romeo & Juliet.\"", "$399", "img/travel3.jpg", "http://www.italia.it/en/discover-italy/veneto.html");

//Initializing an array to story all objects.
var destinations = [oahu, belieze, veneto];

//Adds a table element to the travel images div.
document.querySelector("#travelImages").innerHTML = "<table></table>";

//Using a for loop, generate a table row to display the image of the destination in, along with the name.
for (i=0; i<3; i++) {
	//A table row element is added to the table.
	var node = document.createElement("TR");
	var anchor = document.createElement("A");

	//Declares a variable to store the name of the destination. Converts to a lowercase form so that we can automatically populate the row ID.
	var name = destinations[i]["name"].toLowerCase();

	//Removes all white spaces so that there are no conflicts with CSS notation.
	var nodeId = name.replace(/\s/g,'');

	//Sets the ID of the table row to be equal to the name of the destination, minus white spaces and all lowercased.
	node.id = nodeId;

	var html = "<img src=\"" + destinations[i]["imgUrl"] + "\"/>"  + "<span>" + destinations[i]["name"] + "</span>" + "<div>" + destinations[i]["desc"] + "</div>";
	node.innerHTML = html;

	anchor.href = destinations[i]["webUrl"];
	node.appendChild(anchor);

	document.querySelector("#travelImages table").appendChild(node);

}

//Adds an event listener to display a description of the travel destination.
var elements = document.querySelectorAll("#travelImages table tr");

for (i=0; i<elements.length;i++) {
	elements[i].addEventListener("mouseover", showDesc);
	elements[i].addEventListener("mouseout", hideDesc);
	elements[i].addEventListener("click", openWindow);
}




