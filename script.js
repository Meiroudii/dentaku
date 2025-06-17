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
let result = 0;

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
			gui_keys_handler(button_label);
		}
	})
})

window.addEventListener("keyup", keys_handler);

function keys_handler(e) {
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
		result = 0;
		let x = parseInt(expression[0]);
		let operator = expression[1];
		let y = parseInt(expression[2]);
		display.value = expression

		operate(x, operator, y);
	}
	console.log(e.key);
}

function gui_keys_handler(expr) {
	let binding = expr;
	if (Number.isFinite(parseInt(binding))) {
		console.log("That's a number bro!");
		numbers.push(parseInt(binding));
		num = +numbers.join("");
		if (expression.length == 2) {
			expression.push(num);
			console.log(`At number if ${expression}`);
		}
		display.value = expression
	}
	if ((binding == "+" || binding == "/" || binding == "*" || binding == "x" || binding == "-")) {
		if (num != 0) {
			expression.push(num);
			expression.push(binding);
			console.log(expression);
			numbers.length = 0
		}
		display.value = expression
	}
	if (expression.length == 3) {
		result = 0;
		let x = parseInt(expression[0]);
		let operator = expression[1];
		let y = parseInt(expression[2]);
		display.value = expression

		operate(x, operator, y);
	}
	console.log(binding);
}

function chain_calculation(result) {
	expression.length = 0;
	numbers.length = 0;
	expression.push(result);
}

function operate(x, operator, y) {
	switch (operator) {
		case '+':
			alert(x + y);
			chain_calculation(result);
			break;
		case '-':
			alert(x - y);
			result = (x - y);
			chain_calculation(result);
			break;
		case 'x':
			alert(x * y);
			chain_calculation(result);
			break;
		case '*':
			alert(x * y);
			chain_calculation(result);
			break;
		case '/':
			alert(x / y);
			result = Math.round(x / y);
			chain_calculation(result);
			break;
	}
}
