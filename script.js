//your JS code here. If required.
const age = document.getElementById("age");
const name = document.getElementById("name");
const submit = document.getElementById("btn");

submit.addEventListener("click",() => {
	if (age.value==="" || name.value==="") {
		alert("Please enter valid details.");
	}
	const myPromise = new Promise((resolve,reject) => {
		setTimeout(()=>{
			if (age.value>=18) {
				resolve(`Welcome, ${name.value}. You can vote.`);
			}
			else{
				reject(`Oh sorry ${name.value}. You aren't old enough.`)
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