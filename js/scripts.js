$(document).ready(function() {
	$('.toggle-nav').on('click', function(e) {
		event.preventDefault();
		$('.global-nav').toggleClass('open');
	});
});