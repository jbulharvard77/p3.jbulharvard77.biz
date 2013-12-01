$("#full_moon").click(function()	{
	$("#output").html("The full moon is on December 17");
	$("#full_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"-100px"});
		

});

//$("#output").html("The full moon is on December 17");
//$("#full_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"-100px"});

//$("#output").html("The last quarter is on December 10");
//$("#last_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"-100px"});
