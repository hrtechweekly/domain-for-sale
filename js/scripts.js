/*
* Theme: Domain For Sale Free Theme v1.0.0
* Author: codexgq (URL: https://codex.gq GitHub: https://github.com/codexgq)
* Description: Main Theme JS Compilation
* GitHub: https://github.com/codexgq/domain-for-sale-free-theme
* Copyright: 2014-2022 codexgq, Inc.
* License: MIT
*/

/*
=================================================
  Table of Contents
=================================================

	1. Theme Scripts
        1.1. Main Theme Service Scripts
        - HTML5 Link Prefetch and Page Prerender
        - Avoid The Unload Event
        1.2. Extra Service Scripts (Variable Elements)
	2. Harnish Design' Squeeze
        - Preloader
        - Tooltips
	3. Start Bootstrap' Squeeze
        - Navigation Bar

================================================= 
*/

/*
=================================================
    1. Theme Scripts
=================================================
=================================================
    1.1. Main Theme Service Scripts
=================================================
*/

// These scripts are service and to be placed either in file or inline. 

/* 1.1. HTML5 Link Prefetch and Page Prerender */

// Define the function.
function add_hint(type, url) {
    if(!type || !url) return;
    var el = document.createElement("link");
    el.setAttribute("rel", type);
    el.setAttribute("href", url);
    el.setAttribute("src", url);
    document.getElementsByTagName("head")[0].appendChild(el);
    document.getElementsByTagName("body")[0].appendChild(el);
}
// Prefetch, dns-prefetch, preload, prerender or preconnect links for website acceleretion.
add_hint('dns-prefetch', 'https://cdnjs.cloudflare.com/');
add_hint('dns-prefetch', 'https://fonts.gstatic.com/');
add_hint('dns-prefetch', 'https://fonts.googleapis.com/');
// Speed up transitions between pages by prerendering them within a domain.
document.addEventListener("mousemove", function(e) {
    if(!e.target.href || e.target.href.indexOf(location.host) == -1 || e.target.hintAdded) return;
    add_hint('prerender', e.target.href);
    e.target.hintAdded = true;
});

/* 1.2. Avoid The Unload Event */

// In all modern browsers, it's recommended to always use the `pagehide` event 
// to detect possible page unloads (a.k.a the terminated state) rather than the `unload` event.
const terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
addEventListener(terminationEvent, (event) => {
    // Note: if the browser is able to cache the page, `event.persisted`
    // is `true`, and the state is frozen rather than terminated.
}, {
    capture: true
});

/*
=================================================
    1.2. Extra Service Scripts (Variable Elements)
=================================================
*/

// There are no scripts here yet.

/*
=================================================
    2. Harnish Design' Squeeze
=================================================
*/

/*
* Template:  	 DomainX - Domain for Sale HTML Template
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File Squeeze
*/

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

/*
=================================================
    3. Start Bootstrap' Squeeze
=================================================
*/

/*!
* startbootstrap-creative-codexgq v1.0.0 (https://github.com/codexgq/startbootstrap-creative-codexgq)
* Copyright 2014-2022 codexgq, Inc.
* Licensed under MIT (https://github.com/codexgq/startbootstrap-creative-codexgq/blob/master/LICENSE)
*/

/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
/*!
* Description: Main Theme Script File Squeeze
*/

// These scripts are aimed to improve UI & UX for the theme.

/* Navigation Bar */

window.addEventListener('DOMContentLoaded', event => {

    // Define navigation bar shrink function.
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar.
    navbarShrink();

    // Shrink the navbar when page is scrolled.
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main navigation element.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navigation bar when toggler is visible.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
