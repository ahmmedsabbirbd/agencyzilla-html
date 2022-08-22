/*** Pogress bar */
$(window).load(function() {
    // Append progress bar header
    $( ".header" ).append( '<progress value="0" max="100" class="agencyzilla-progress-bar" data-foreground="#16cd00" data-background="#f1f1f1" data-height="5" data-position="top"></progress>' );

    // Maximum value for the progressbar
    var winHeight = $(window).height(),
    docHeight = $(document).height();
    var max = docHeight - winHeight;
    $('.agencyzilla-progress-bar').attr('max', 100);
        
    var progressForeground = $('.agencyzilla-progress-bar').attr('data-foreground');
    var progressBackground = $('.agencyzilla-progress-bar').attr('data-background');
    var progressHeight = $('.agencyzilla-progress-bar').attr('data-height');
    var progressPosition = $('.agencyzilla-progress-bar').attr('data-position');
    var progressCustomPosition = $('.agencyzilla-progress-bar').attr('data-custom-position');
    var progressFixedOrAbsolute = 'fixed';

    // Custom position
    if (progressPosition == 'custom') {
        $('.agencyzilla-progress-bar').appendTo(progressCustomPosition);
        progressPosition = 'bottom';
        progressFixedOrAbsolute = 'absolute';
    }

    // Styles
    if ( progressPosition == 'top' ) {
        var progressTop = '0';
        var progressBottom = 'auto';
    } else {
        var progressTop = 'auto';
        var progressBottom = '0';
    }

    $('.agencyzilla-progress-bar').css({
        'background' : progressBackground,
        'color' :  progressForeground,
        'height' :  progressHeight + 'px',
        'top' : progressTop,
        'bottom' : progressBottom,
        'position' : progressFixedOrAbsolute,
        'display' : 'block',
        'width' : '100%',
        'transition' : 'all 0.3s ease',
    });

    $('<style>.agencyzilla-progress-bar::-webkit-progress-bar { background-color: transparent } .agencyzilla-progress-bar::-webkit-progress-value { background: ' + progressForeground + ' } .agencyzilla-progress-bar::-moz-progress-bar { background: ' + progressForeground + ' }</style>')
        .appendTo('head');

    // Inital value (if the page is loaded within an anchor)
    var value = $(window).scrollTop();

    $('.agencyzilla-progress-bar').attr('value', (value/max)*100);
    // Maths & live update of progressbar value
    $(document).on('scroll', function() {
        var value = $(window).scrollTop();
        $('.agencyzilla-progress-bar').attr('value', (value/max)*100);
    });
});