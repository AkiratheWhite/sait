window.addEventListener('load', loadPage); //Listens for the HTML and content to be loaded, and then triggers the loadPage function.

function loadPage() {
  $("#header").load("header.html");
  $("#about").load("about.html");	
  $("#contact").load("contact.html");
  $("#register").load("register.html");
}
// Uses JQuery to load in the components of the webpage. The function inputListners is invoked as a callback when completed.