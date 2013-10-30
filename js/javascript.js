$(document).ready(function(){ 
			
		   
	 $('.arrow img').click(function() {
	    $('html, body').animate({
	        scrollTop: $(".background-skills").offset().top
	    }, 1000);
	});

	 $("a[href='#contact']").click(function() {
	    $("html, body").animate({ scrollTop: 0 }, "slow");
	       return false;
	});

});//DOCUMENT READY




		






