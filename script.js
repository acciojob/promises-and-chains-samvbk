//your JS code here. If required.
const age = document.getElementById("age");
const name = document.getElementById("name");
const submit = document.getElementById("submit");

submit.addEventListener("click",() => {
	if (age==="" || name==="") {
		alert("Please enter valid details.");
	}
	const myPromise = new Promise((resolve,reject) => {
		setTimeout(()=>{
			if (age>=18) {
				resolve("Welcome, . You can vote.");
			}
			else{
				reject("Oh sorry . You aren't old enough.")
			}
		},4000);
	});
	myPromise
		.then((message) => {
			alert(message);
		})
		.catch((e) => {
			alert(e);
		});
});