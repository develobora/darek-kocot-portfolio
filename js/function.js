$('#link_contact, #link_offer').click(function() {
	var linkHref = $(this).attr('href'); 
	$('html, body').animate({
		scrollTop: $(linkHref).offset().top
	}, 800);
});
