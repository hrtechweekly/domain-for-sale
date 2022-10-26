/*
* Theme: Domain For Sale Free Theme v1.0.0
* Author: codexgq (URL: https://codex.gq GitHub: https://github.com/codexgq)
* Description: Custom Script Takeaway
* GitHub: https://github.com/codexgq/domain-for-sale-free-theme
* Copyright: 2014-2022 codexgq, Inc.
* License: MIT
*/

/* Source Code:

/*
* Template:  	 DomainX - Domain for Sale HTML Template
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File Squeeze
*/

/* Description: Customization Takeaway performed by codexgq Team */

(function ($) {
	"use strict";

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});

// Tooltips
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

})(jQuery)
