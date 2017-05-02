$(".calc__key").click(function() {
  var newInput = $(this).text();
  var oldInput = $(".calc__display").text();
  if (oldInput === "0") {
    $(".calc__display").text(newInput);
  }
  else {
    $(".calc__display").text(oldInput + newInput);
  }
});