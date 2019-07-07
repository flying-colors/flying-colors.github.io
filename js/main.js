"use strict";

(function () {
  "use strict";

  $('a[href^="#"]').on('click', function () {
    var speed = 300,
        href = $(this).attr("href"),
        target = $(href == "#" || href == "" ? 'html' : href),
        position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
  $('[data-toggle="collapse"]').on('click', function () {
    $('.collapse').slideToggle();
  });
  $('.collapse a').on('click', function () {
    $('.collapse').slideUp();
  });
})();