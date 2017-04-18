$('#link_contact, #link_offer').click(function() {
	var linkHref = $(this).attr('href'); 
	$('html, body').animate({
		scrollTop: $(linkHref).offset().top
	}, 800);
});
// $('.offer').hover(function() {
// 		$('.link_offer-submenu').fadeIn(300);	
// 	}, function() {
// 		$('.link_offer-submenu').fadeOut(300);
// 	});
