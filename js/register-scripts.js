/* Contains all scripts required on the registration form.*/

//Selects all 'input' HTML tags in the document and stores it as a NodeList.
var inputs = document.querySelectorAll('input');

//A separate variable is used for the payment type selector. This is for the sake of visual clarity.
var fields = document.querySelectorAll('.form-container');

//Four event listeners are added to each input field. This allows the description box to pop up when hovered or selected.
//Focus and blurs are added for the field forms, so that tabbing still makes the messages show up.
for (var i=0; i<inputs.length; i++) {
		inputs[i].addEventListener('focus', displayDesc);
		inputs[i].addEventListener('blur', hideDesc);
}
//Mouse listeners are added for the input field labels.
for (var i=0; i<fields.length; i++) {
		fields[i].addEventListener('mouseover', displayDesc); 
		fields[i].addEventListener('mouseout', hideDesc);	
}


//This function causes the field description message associated with the input field to be displayed.
function displayDesc(event) {
	var parent = (event.target.parentNode || event.srcElement);
	//When an input field or label triggers an event, the parent element is selected and stored.
	var parentId = parent.id;
	//A new variable is used to hold the ID tag of the parent element, where the parent element is a container for the input, label, and input description.

	try {
		var desc = document.querySelector("#" + parentId + "> .form-desc");
		desc.style.display = "block";
	}
	//The input description is a unique class and is selected using a Query Selector. However, an input form may not exist currently, so we will use a try method.
	//If the input description can be found, it's display will be changed from none to block.

	catch(err) {
	}
	//If an input description has not been defined for the form, the function ends.
}

//This function is the same as the one above, except it switches display from block to none instead.
function hideDesc(event) {
	var parent = (event.target.parentNode || event.srcElement);
	var parentId = parent.id;
	
	try {
		var desc = document.querySelector("#" + parentId + "> .form-desc");
		desc.style.display = "none";
	}
	
	catch(err) {
	}
}

//Simple confirm dialogue for the form. If the user presses yes, the form submits. If the user presses cancel, the form does not submit.
function confirmSubmit() {
	if (confirm("Submit the form?")) {
		return validateForm();
		//A form validation function will execute if the user confirms the form submit.
	}

	else {
		return false;
	}
}


//Same as above, except for the reset button instead of the submit button.
function confirmReset() {
	if (confirm("Reset the form?")) {
		return true;
	}

	else {
		return false;
	}
}

//Function to validate form entries.
function validateForm() {
	var formFields = document.querySelector("#registerForm").elements;
	//Finds the registeration form node and obtains all form controls within the node.

	var notLetter = /[^a-z]+$/i;
	var postCode = /[a-z]\d[a-z]\s\d[a-z]\d/i;
	//Declares regular expression patterns to use. The first pattern looks for special characters, the second verifies postal codes.
	
	var errorChecker; //Will be used as a boolean to determine if the form is allowed to submit.
	var errorCode = ""; //Variable to store the error codes so that the user knows what errors are occuring.


	for (i=0;i<formFields.length; i++) {
		//For loop to cycle through all of the elements in the registration form.

		if (formFields[i].value == "") {
			alert("One or more required fields are empty. Please enter all information.");
			return false;
		}
		//If any of the fields are empty, the form will not submit and a warning is sent to the user.
	}

	if (notLetter.test(formFields.namedItem("firstName").value) == true) {
		errorCode = errorCode + "\n- First name has invalid characters."
		errorChecker = true;
	}

	if (notLetter.test(formFields.namedItem("lastName").value) == true) {
		errorCode = errorCode + "\n- Last name has invalid characters."
		errorChecker = true;
	}

	if (postCode.test(formFields.namedItem("postCode").value) == false) {
		errorCode = errorCode + "\n- Invalid postal code."
		errorChecker = true;
	}

	if (errorChecker == true) {
		alert("Please correct the following errors:" + errorCode)
		return false;
	}
	
	else {
		return true;
	}
}
