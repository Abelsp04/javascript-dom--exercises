let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let child = document.createElement("li");
	child.innerHTML = "Forth element";
	document.querySelector("#myList").appendChild(child);
});
