const btn = document.getElementById("more");
const display = document.getElementById("amt-display");
const vbuk = document.getElementById("vbuk-code")
const amtAdd = document.getElementById("amt-add");
const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let amtToAdd = 1;
let score = 0;
let code = "";
let currentChar = 0;


for(let i = 0; i < 16; i++){
	currentChar = Math.floor(Math.random() * chars.length);
	code += chars[currentChar]
}

btn.addEventListener("click", function() {
	score+=amtToAdd;
	display.innerText = "VBUCKS amt: " + score;
	vbuk.innerText  = "Your code is:" + code;
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
