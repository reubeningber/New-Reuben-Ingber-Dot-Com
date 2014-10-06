$(document).ready(function() {

    /*-------------------------------------------- */
    /** Navigation */
    /*-------------------------------------------- */
      
    $('.toggle-nav').on('click', function(e) {
        e.preventDefault();
        $('.global-nav').toggleClass('open');
    });

	/*-------------------------------------------- */
    /** FitText */
    /*-------------------------------------------- */
    
	$('.js-fit-text').each(function() {
        var $this = $(this),
            fitCompressor = $this.data('fit-compressor') || 1,
            fitMaxFontSize = $this.data('fit-max-font-size') || Number.POSITIVE_INFINITY,
            fitMinFontSize = $this.data('fit-min-font-size') || Number.NEGATIVE_INFINITY;

            $this.fitText(fitCompressor, {maxFontSize: fitMaxFontSize, minFontSize: fitMinFontSize});
    });

    /*-------------------------------------------- */
    /** InstaFeed */
    /*-------------------------------------------- */
        
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

    /*-------------------------------------------- */
    /** Get Podcasts Episodes */
    /*-------------------------------------------- */



    // $.get('http://howtoholdapencil.com/feed.xml', function (data) {
    //     $(data).find("entry").each(function () { // or "item" or whatever suits your feed
    //         var el = $(this);

    //         console.log("------------------------");
    //         console.log("title      : " + el.find("title").text());
    //         console.log("link     : " + el.find("link").text());
    //     });
    // });document.location.protocol + 

    $.ajax({
        url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent('http://howtoholdapencil.com/feed.xml'),
        dataType : 'json',
        success  : function (data) {
            if (data.responseData.feed && data.responseData.feed.entries) {
                var $recentEpisodeList = $('.recent-episodes');

                $.each(data.responseData.feed.entries,function(i,e) {
                    // $recentEpisodeList.append(<li><a href=" + e.link + "> + e.title '</a></li>);
                    $('<a>', {text:e.title, href: e.link}).appendTo($recentEpisodeList);
                });
                // $.each(data.responseData.feed.entries, function (i, e) {
                //     $('.episode-link').attr('src', 'e.link');
                //     $('episode-title').html(e.title)
                // });
            }
        }
    });
    
    

});