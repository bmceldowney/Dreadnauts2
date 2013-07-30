$('body').hammer().on('touch', 'button.action', function(evt) {
    $(this).addClass('on');
});

$('body').hammer().on('drag swipe', 'button.action', function(evt) {
    evt.gesture.preventDefault();
});

$('body').hammer().on('release', 'button.action', function(evt) {
    
    var target = $(this);

    target.addClass('rock').one('transitionend webkitTransitionEnd oTransitionEnd', function() {
        target.remove();
    });
});