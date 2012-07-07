(function ($) {
    // define function
    // Array
    Array.prototype.max = function() {
      return Math.max.apply(Math, this);
    };

    // jQuery
    $.maxHeight = function ($$) {
      return $.map($$, function () {
        return $(this).height();
      }).max();
    };

    $.flatHeight = function (selector) {
      var $$ = $(selector);
      var max = $.maxHeight($$);
      return $$.height(max);
    };

  $(function(){
    // entry point
    $.flatHeight('.span4');
  });
})(jQuery);
