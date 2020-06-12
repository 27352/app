window.onload = () => {

    'use strict';

    navigator.serviceWorker && navigator.serviceWorker.register('./sw.js', {
        scope: './'
    }).then(reg => {
        console.log('scope', reg.scope);
    });

};

/*
    navigator.serviceWorker && navigator.serviceWorker.register('sw.js', {
            scope: './'
        })

        .then(serviceWorkerRegistration => {
            // serviceWorkerRegistration.pushManager.subscribe().then(pushSubscription => {
            //     console.log(pushSubscription.subscriptionId);
            //     console.log(pushSubscription.endpoint);
            // });
        })

        .catch(reason => {
            console.log(reason);
        });
        */