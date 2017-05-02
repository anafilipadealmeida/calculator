var tmpResult = 0;
var tmpOperator;
$(".calc__key").click(function() {
	var newInput = $(this).text();
	var oldInput = $(".calc__display").text();

	if ($(this).hasClass("calc__key--operator")) {
		tmpResult = parseInt(oldInput);
	 	tmpOperator = newInput;
		$(".calc__display").text("");
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