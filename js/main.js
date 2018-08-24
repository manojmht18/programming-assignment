
$(document).ready(function(){

	$(".change").click(function(){
		var buttonValue = $(this).val();
		if(buttonValue == "red"){
			boxColor = "#ff0000";
		} else if(buttonValue == "green"){
			boxColor = "#00ff00";
		} else {
			boxColor = "#0000ff";
		}
		$(".change").parent().css("background-color", boxColor);
	});

	$(".reset").click(function (){
    $(".change").parent().css("background-color", "");
	});
});