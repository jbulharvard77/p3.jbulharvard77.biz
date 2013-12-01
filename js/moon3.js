		else if (moon_phase = $("#waxing_gibbous"))	{
			$("#output").html("There will be a waxing gibbous moon on from December 11-16");
			$("#waxing_gibbous").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"-50px"});
		}
		else if (moon_phase = $("#first_quarter"))	{
			$("#output").html("The first quarter moon is on December 10");
			$("#first_quarter").clone().appendTo("#output").css({"position":"absolute", "top":"100px"});
		}
		else if (moon_phase = $("#waxing_crescent"))	{
			$("#output").html("There will be a waxing crescent moon from December 4-9");
			$("#waxing_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"150px", "left":"300px"});
		}
		else if (moon_phase = $("#new_moon"))	{
			$("#output").html("The new moon is on December 3");
			$("#new_moon").clone().appendTo("#output").css({"position":"absolute", "top":"300px", "left":"400px"});
		}
		else	
			$("#output").html("There will be a waning crescent moon on December ");
			$("#waning_crescent").clone().appendTo("#output").css({"position":"absolute", "top":"450px", "left":"300px"});
		}