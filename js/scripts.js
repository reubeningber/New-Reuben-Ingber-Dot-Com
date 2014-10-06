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

    // InstaFeed 
    var feed = new Instafeed({
        get: 'user',
        clientId: '4bbfbc0356b24be5bb42f8bebcf178a9',
        accessToken: '1920699.467ede5.6830e1f8ba9345378031eefce7eaa5c7',
        userId: 1920699, 
        template: '<li><a href="{{link}}" target="_blank"><img src="http://{{image}}" alt=""></a></li>',
        resolution: 'thumbnail',
        limit: 7
    });
    feed.run();

});