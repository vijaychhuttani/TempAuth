/**
 * Readsup - Main App Declaration
 *
 */
(function () {
    angular.module('readsupApp', [
        'ngAnimate', 
        'ngCookies', 
        'ngTouch',  
        'ngResource',  
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'ngSanitize',                   // ngSanitize
        'ng-token-auth',                // Token Authentication
        'cgNotify'                      // Notification Service
    ])
})();

// Other libraries are loaded dynamically in the app.config.js file using the library ocLazyLoad