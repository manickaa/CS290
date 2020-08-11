document.addEventListener("DOMContentLoaded", bookingData);

function bookingData() {
	document.getElementById("submitInfo").addEventListener("click", function(event) {
		var req = new XMLHttpRequest();
		var submitSite = "https://httpbin.org/post";
		var payLoad = 
		{
			"firstname":null,
			"lastname":null,
			"email":null,
			"phonenumber":null,
			"bookingdate":null,
			"numberofguests":null,
			"notes":null
		};
		payLoad.firstname = document.getElementById("firstname").value;
		payLoad.lastname = document.getElementById("lastname").value;
		payLoad.email = document.getElementById("email").value;
		payLoad.phonenumber = document.getElementById("phonenumber").value;
		payLoad.bookingdate = document.getElementById("bookingdate").value;
		payLoad.numberofguests = document.getElementById("numberofguests").value;
		payLoad.notes = document.getElementById("notes").value;

		let requiredFields = ['firstname', 'lastname', 'email', 'phonenumber', 'bookingdate', 'numberofguests'];

		let doesNotHaveValue = !!requiredFields.find(field => !payLoad[field]);

		if (doesNotHaveValue) {
			const test = document.getElementById('test');
			test.innerHTML = "Please Fill all required values";
			return;
		}

		req.open("POST", submitSite, true);
		req.setRequestHeader("Content-Type", "text/plain");
		req.addEventListener("load", function(resp) {
			console.log("Yoooo");
			console.log(resp);
			console.log(req);
			if(req.status >=200 && req.status <400) {
				var response = JSON.parse(req.responseText);
				console.log("Response Submitted");
				console.log(response);
				const test = document.getElementById('test');
				test.innerHTML = "Table booked!! Enjoy !!!";
			}
			else {
				console.log("Error in network request: "+req.statusText);
			}});
		req.send(JSON.stringify(payLoad));
		event.preventDefault();
		
	});
}
