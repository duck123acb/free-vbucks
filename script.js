const btn = document.getElementById("free-bucks");
const amountTextbox = document.getElementById("amt-vbuks-add");
const amountDisplay = document.getElementById("amt-display");

let amtAdd = 1;
let vbucks = 0;

amountTextbox.addEventListener("keydown", () => {
	amtAdd = Number(amountTextbox.value);
	console.log(amtAdd);
});

btn.addEventListener("click", () => {
	vbucks += amtAdd;
	amountDisplay.innerText = `amount of now vbucks: ${vbucks}`;
});
