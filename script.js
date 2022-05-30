const btn = document.getElementById("more");
const display = document.getElementById("amt-display");
const vbuk = document.getElementById("vbuk-code")
const amtAdd = document.getElementById("amt-add");
let amtToAdd = 1;
let score = 0;

btn.addEventListener("click", function() {
	score+=amtToAdd;
	display.innerText = "VBUCKS amt: " + score;
	vbuk.innerText = "Your code is: 93MO 67MZ 7U99 SKMQ";
});

amtAdd.addEventListener('keydown', function (e) {
	if (!e) e = window.event;
	switch (e.key) {
		case "Enter":
			amtToAdd = parseInt(amtAdd.value);
			break;
		default:
			return;
	}
});
