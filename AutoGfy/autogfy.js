var autogfy = {
    delay: 500,
    prefix: 'http://gfycat.com/fetch/',
    initialise: function () {
        // initially replace all anchors
        this.autogfyAnchors();

        // update all dynamically added anchors
        var timeout;
        $(document).bind('DOMSubtreeModified', function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                autogfy.autogfyAnchors();
            }, this.delay);
        });
    },
    autogfyAnchors: function () {
        var $anchors = $('a');
        for (var i = 0; i < $anchors.length; i++) {
            var source = $($anchors[i]).attr('href');
            if (source && source.endsWith('.gif') && !source.startsWith(this.prefix)) {
                if (source.startsWith('//')) {
                    source = 'http:' + source;
                }
                $($anchors[i]).attr('href', this.prefix + source);
            }
        }
    }
};

$(function () {
    autogfy.initialise();
})