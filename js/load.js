window.addEventListener('load', loadPage);

function loadPage() {
  $("#header").load("header.html");
  $("#about").load("about.html");	
  $("#contact").load("contact.html");
  $("#register").load("register.html");
}

// function addListeners() {
// 	document.getElementById("submit").addEventListener("click", submitConfirm); 
// 	document.getElementById("reset").addEventListener("click", resetConfirm); 

// 	function submitConfirm() {
// 		confirm("Do you want to submit your information now?");
// 	}

// 	function resetConfirm() {
// 		confirm("Do you want to reset the form?");
// 	}
// }