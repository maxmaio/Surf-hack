// ==UserScript==
// @name           Surfline
// @namespace      http://github.com/maxmaio
// @description    For tha boyz
// @author         Max Maio
// @include        https://*.surfline.com/*
// @version        0.0.1
// @grant          none
// ==/UserScript==


setInterval(function() {
    if (document.querySelector('.afs_ads')){
        document.querySelector('.afs_ads').remove();
    }
    if (document.querySelector('.jw-title.jw-reset-text')){
        document.querySelector('.jw-title.jw-reset-text').remove();
    }
    if (document.querySelector('.jw-shortcuts-tooltip.jw-modal jw-reset')) {
        document.querySelector('.jw-shortcuts-tooltip.jw-modal jw-reset').remove();
    }
    if (document.querySelector('.jw-overlays.jw-reset')){
        document.querySelector('.jw-overlays.jw-reset').remove();
    }
    if (document.querySelector('.jw-hidden-accessibility')){
        document.querySelector('.jw-hidden-accessibility').remove();
    }
    if (!document.querySelector('.quiver-cam-upsell__message')){
       return;
    }

    console.log("upsell found")
    document.querySelector('.quiver-cam-upsell__message').remove();
    document.querySelector('._1oY8CNjl3nFlvlfTQQKbPf').remove();
    jwplayer().play();
}, 100);
