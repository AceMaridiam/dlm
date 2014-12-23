/**
 * @file
 * Handles fractionslider js plugin.
 */

(function ($) {
 Drupal.behaviors.fractionslider = {	 
  attach: function (context, settings) {

	 if(Drupal.settings.fractionslider) {

		cont = (Drupal.settings.fractionslider.controls == 'false') ? false : true;
		pag = (Drupal.settings.fractionslider.pager == 'false') ? false : true;

		$('.slider-wrapper .slider').fractionSlider({
			'fullWidth': true,
			'controls': cont,
			'pager': pag,
			'responsive': true,
			'dimensions': "900,400",
			'increase': false,
			'pauseOnHover': true,
			'slideEndAnimation': true
		});

	 }

	 if(Drupal.settings.viewsfractionslider) {

		cont = (Drupal.settings.viewsfractionslider.controls == 'false') ? false : true;
		pag = (Drupal.settings.viewsfractionslider.pager == 'false') ? false : true;

		$(".view .slider-wrapper .slide").each(function() {
			var count = 1,
				step = 1,
				dirc = 1, 
				pos = Drupal.settings.viewsfractionslider.position,
				lpos = Drupal.settings.viewsfractionslider.positionl,
				dataspeed = Drupal.settings.viewsfractionslider.dataspeed,
				datadelay = Drupal.settings.viewsfractionslider.datadelay;
				datain = ["left", "topLeft", "bottomLeft", "right", "topRight", "bottomRight", "top", "bottom"];
				dir = datain[Math.floor(Math.random() * datain.length)];
				dir2 = datain[Math.floor(Math.random() * datain.length)];
			$(this).children('.views-field').each(function() {
				$(this).attr({
					"data-step": step++,
					"data-position": pos*count++ + ","+lpos,
					"data-in": dir,
					"data-out": dir2
					});
			});
			$(this).children('.views-field').attr({
				"data-speed": dataspeed,
				"data-delay": datadelay
			});
		});
		$('.view .slider-wrapper .slider').fractionSlider({
			'fullWidth': true,
			'controls': cont,
			'pager': pag,
			'responsive': true,
			'dimensions': "900,400",
			'increase': false,
			'pauseOnHover': true,
			'slideEndAnimation': true
		});

	 }

  }
 }
})(jQuery);
