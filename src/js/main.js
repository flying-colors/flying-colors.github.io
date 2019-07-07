(function () {
    "use strict";
    $('a[href^="#"]').on('click', function() {
        const speed = 300,
              href = $(this).attr("href"),
              target = $(href == "#" || href == "" ? 'html' : href),
              position = target.offset().top;
        $("html, body").animate({
          scrollTop: position
        }, speed, "swing");
        return false;
	});
	$('[data-toggle="collapse"]').on('click', () =>{
		$('.collapse').slideToggle('fast');
	})
	$('.collapse a').on('click', ()=>{
		$('.collapse').slideUp('fast');
	});
})();