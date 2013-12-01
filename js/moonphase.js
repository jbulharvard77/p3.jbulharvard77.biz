$("button").click(function()	{
	var day = $("input[name='days']").val();
	if (day>0 && day<3 || day>25 && day<32)	{
		$("#output").html("There will be a waning crescent moon on December "+ day);
		$("#waning_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"450px", "left":"300px"});
	}
	else if (day==3) {
		$("#output").html("The new moon is on December "+ day);
		$("#new_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"400px"});
	}
	else if (day>3 && day<10) {
		$("#output").html("There will be a waxing crescent moon on December "+ day);
		$("#waxing_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"300px"});
	}
	else if (day==10) {
		$("#output").html("The first quarter moon is on December "+ day);
		$("#first_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"100px"});
	}
	else if (day>10 && day<17) {
		$("#output").html("There will be a waxing gibbous moon on December "+ day);
		$("#waxing_gibbous").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"-50px"});
	}
	else if (day==17) {
		$("#output").html("The full moon is on December "+ day);
		$("#full_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"-100px"});
	}
	else if (day>17 && day<25) {
		$("#output").html("There will be a waning gibbous moon on December "+ day);
		$("#waning_gibbous").clone().appendTo("#output").css({"position":"absolute", "top":"450px", "left":"-50px"});
	}
	else if (day==25) {
		$("#output").html("The last quarter moon is on December "+ day);
		$("#last_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"500px"});
	}
	else	{
		alert("There are only 31 days in December");
	}

});

$("#full_moon").click(function()	{
	$("#output").html("The full moon is on December 17");
	$("#full_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"-100px"});
});

$("#waxing_gibbous").click(function()	{
	$("#output").html("There will be a waxing gibbous moon from December 4-9");
	$("#waxing_gibbous").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"-50px"});
});

$("#first_quarter").click(function()	{
	$("#output").html("The first quarter moon is on December 10");
	$("#first_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"100px"});
});

$("#waxing_crescent").click(function()	{		
	$("#output").html("There will be a waxing crescent moon from December 4-9");
	$("#waxing_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"300px"});
});

$("#new_moon").click(function()	{		
	$("#output").html("The new moon is on December 3");
	$("#new_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"400px"});
});

$("#waning_crescent").click(function()	{		
	$("#output").html("There will be a waning crescent moon from December 1-2 and 26-31");
	$("#waning_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"450px", "left":"300px"});
});

$("#last_quarter").click(function()	{		
	$("#output").html("The last quarter moon is on December 25");
	$("#last_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"500px"});
});

$("#waning_gibbous").click(function()	{		
	$("#output").html("There will be a waning gibbous moon from December 18-24");
	$("#waning_gibbous").clone().appendTo("#output").css({"position":"absolute", "top":"450px", "left":"-50px"});
});

