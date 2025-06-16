/**
 * INput algo
 * if the length of the number array is 2 and the operator is 1 then the operation will occur
 * then the result will inserted into the index 0 of number array until the clear button is triggered
 * **/
const main = document.querySelector("main");
const power_off = document.createElement("div");
const numbers = [];
const expression = [];
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll(".calc-button"));
let num = 0;

function toggle_power() {
	document.body.append(main, power_off);
	power_off.classList.add("power-off-overlay");
	alert("Ctrl+R to power on again.");
}




buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		let button_label = e.target.textContent;
		if (button_label == "CLEAR") {
			display.value = ' ';
			expression.length = 0;
			numbers.length = 0;
		}
		else if (button_label == "DELETE") {
			display.value = ' ';

		} else {
			display.value = button_label;
		}
	})
})

window.addEventListener("keyup", (e) => {
	const binding = e.key;
	if (Number.isFinite(parseInt(e.key))) {
		console.log("That's a number bro!");
		numbers.push(parseInt(e.key));
		num = +numbers.join("");
		if (expression.length == 2) {
			expression.push(num);
			console.log(`At number if ${expression}`);
		}
		display.value = expression
	}
	if ((e.key == "+" || e.key == "/" || e.key == "*" || binding == "x" || binding == "-")) {
		if (num != 0) {
			expression.push(num);
			expression.push(e.key);
			console.log(expression);
			numbers.length = 0
		}
		display.value = expression
	}
	if (expression.length == 3) {
		let result = 0;
		let x = parseInt(expression[0]);
		let operator = expression[1];
		let y = parseInt(expression[2]);
		display.value = expression

		switch (operator) {
			case '+':
				alert(x + y);
				break;
			case '-':
				alert(x - y);
				result = (x - y);
				expression.length = 0;
				expression.push(result);
				break;
			case 'x': alert(x * y);
				break;
			case '*': alert(x * y);
				break;
			case '/':
				alert(x / y);
				result = Math.round(x / y);
				expression.length = 0;
				expression.push(result);
				break;
		}

	}
	console.log(e.key);
})

function operate(expression) {
	expression = expression.replace(/\s+/g, '');
	if ('0' <= char && char <= '9') {
		num += char;
	}

}



/**
Thought flow: Should I put the user input into and array? appointing each object on their own operations?
Putting numbers in variable and another variables for operations?
Add eventlistener to each buttons that will be designated to their value?
Add listener similar to key code combo? (keyboard support)

<div data-key="65" class="key">
	<kbd>A</kbd>
	<span class="sound">clap</span>
</div>
function playSound(e) {
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
if (!audio) return;

key.classList.add('playing');
audio.currentTime = 0;
audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
**/

