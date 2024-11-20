const display = document.getElementById("display");

function appendToDisplay(input) {
	display.value += input;
}

function clearDisplay() {
	display.value = "";
}

function calculate() {
	try {
		const result = eval(display.value);

		if (result === Infinity || result === -Infinity) {
			display.value = "Error";
		} else {
			display.value = result;
		}
	} catch (error) {
		display.value = "Error";
	}
}

function toggleSign() {
	const currentValue = display.value;

	if (!currentValue) {
		return;
	}

	if (currentValue.startsWith("-")) {
		display.value = currentValue.slice(1);
	} else {
		display.value = "-" + currentValue;
	}
}
