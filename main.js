var tmpResult = 0;
var tmpOperator;
var operation;
$(".calc__key").click(function() {
	var newInput = $(this).text();
	var oldInput = $(".calc__display").text();

	if ($(this).hasClass("calc__key--operator")) {
		tmpResult = parseInt(oldInput);
		tmpOperator = newInput;
		$(".calc__display").text("");
	}
	else if($(this).hasClass("calc__key--total")) {
		switch (tmpOperator) {
			case '+':
				operation = (tmpResult + parseInt(oldInput));
				break;
			case '-':
				operation = (tmpResult - parseInt(oldInput));
				break;
			case 'x':
				operation = (tmpResult * parseInt(oldInput));
				break;
			case '/':
				operation = (tmpResult / parseInt(oldInput));
				break;
		}
		$(".calc__display").text(operation);
	}

	else {

		if (oldInput === "0") {
			$(".calc__display").text(newInput);
		}
		else {
			$(".calc__display").text(oldInput + newInput);
		}
	}
});