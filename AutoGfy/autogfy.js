if (typeof String.prototype.endsWith !== 'function') {
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
}

var autogfy = {
  processGifs: function() {
    // TODO: implement img tag replacement
    var prefix = 'http://gfycat.com/fetch/';
    var $anchors = $('a');
    this.autogfyElements($anchors, 'href', prefix);
  },

  autogfyElements: function(elements, attribute, prefix) {
    for(var i = 0; i < elements.length; i++) {
      var source = $(elements[i]).attr(attribute);
      if (source && source.endsWith('.gif')) {
        $(elements[i]).attr(attribute, prefix + source);
      }
    }
  }
};

$(function() {
  autogfy.processGifs();
})