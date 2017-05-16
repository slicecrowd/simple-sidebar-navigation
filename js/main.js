$(document).ready(function () {
	var menuWrapper = $('.menu-wrapper'),
			mainImageWrapper = $('.main-image-wrapper'),
			menuBtn = $('.menu-btn');

	$('.menu-btn').click(function(event) {
    event.stopPropagation();
  	menuWrapper.toggleClass('openned');
  	mainImageWrapper.toggleClass('overlay');

  	 menuBtn.mouseleave(function(event) {
      $(this).removeClass('hover-arrow');
    });

  	if (menuWrapper.hasClass('openned')) {
      $('.openned').find('.menu-btn').mouseleave(function(event) {
        $(this).addClass('hover-arrow');
      });
    } else {
      menuBtn.removeClass('hover-arrow');
    }
	});

	$(document).click(function (e) {
    e.stopPropagation();
    //check if the clicked area is .menu-wrapper or not
    if (menuWrapper.has(e.target).length === 0) {
	    menuWrapper.removeClass('openned');
			mainImageWrapper.removeClass('overlay');
			menuBtn.removeClass('hover-arrow');
    }
	});
});