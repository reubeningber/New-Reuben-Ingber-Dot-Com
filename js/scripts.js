$(document).ready(function() {

	// FIT TEXT 
	$('.js-fit-text').each(function() {
        var $this = $(this),
            fitCompressor = $this.data('fit-compressor') || 1,
            fitMaxFontSize = $this.data('fit-max-font-size') || Number.POSITIVE_INFINITY,
            fitMinFontSize = $this.data('fit-min-font-size') || Number.NEGATIVE_INFINITY;

            $this.fitText(fitCompressor, {maxFontSize: fitMaxFontSize, minFontSize: fitMinFontSize});
    });

	// Navigation 
	$('.toggle-nav').on('click', function(e) {
		e.preventDefault();
		$('.global-nav').toggleClass('open');
	});
});