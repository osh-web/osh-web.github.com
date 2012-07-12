(function ($) {
  // define function
  // Array
  Array.prototype.max = function() {
    return Math.max.apply(Math, this);
  };

  // jQuery fn
  $.fn.maxHeight = function () {
    return $.map(this, function () {
      return $(this).height();
    }).max();
  };

  $.fn.flatHeight = function () {
    this.height(this.maxHeight);
    return this;
  };

  $(function(){
    // entry point
    $('.span4').flatHeight();
  });
})(jQuery);
