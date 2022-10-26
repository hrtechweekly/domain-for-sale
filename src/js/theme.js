/*
* Theme: Domain For Sale Free Theme v1.0.0
* Author: codexgq (URL: https://codex.gq GitHub: https://github.com/codexgq)
* Description: Theme Scripts
* GitHub: https://github.com/codexgq/domain-for-sale-free-theme
* Copyright: 2014-2022 codexgq, Inc.
* License: MIT
*/

/*
=================================================
  Table of Contents
=================================================

    1. Main Theme Service Scripts
        1.1. HTML5 Link Prefetch and Page Prerender
        1.2. Avoid The Unload Event
    2. Extra Service Scripts (Variable Elements)
        2.1. Prevent Frame

================================================= 
*/

/*
=================================================
    1. Main Theme Service Scripts
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
    2. Extra Service Scripts (Variable Elements)
=================================================
*/

// These scripts are not included in neither scripts.js nor inline by default.

/* 2.1. Prevent Frame */

if(top != self) {
    top.location.href = self.location.href;
}
