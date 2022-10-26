/*
* Theme: Domain For Sale Free Theme v1.0.0
* Author: codexgq (URL: https://codex.gq GitHub: https://github.com/codexgq)
* Description: Custom Script Takeaway
* GitHub: https://github.com/codexgq/domain-for-sale-free-theme
* Copyright: 2014-2022 codexgq, Inc.
* License: MIT
*/

/* Source Code: 

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

/* Description: Customization Takeaway performed by codexgq Team */

// These scripts are aimed to improve UI & UX for the theme.

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
