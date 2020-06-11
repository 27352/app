window.onload = () => {

    'use strict';

    navigator.serviceWorker && navigator.serviceWorker.register('./sw.js', {
        scope: './'
    }).then(reg => {
        console.log('scope', reg.scope);
    });

}
