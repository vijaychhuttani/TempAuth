angular.module('readsupApp')
.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        //////////////////////////
        // ROUTE CONFIGURATION //
        ////////////////////////

    $stateProvider
        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/full-page.html",
        })
        .state('index.login', {
            url: "/login",
            templateUrl: "app/auth/login.html",
            controller: "AuthController",
            controllerAs: 'Auth',
            data: { pageTitle: 'Readsup Login' }
        })
        .state('index.register', {
            url: "/register",
            templateUrl: "app/auth/register.html",
            controller: "AuthController",
            controllerAs: 'Auth', 
            data: { pageTitle: 'Register for Readsup Account' }
        })
        .state('index.forgotPassword', {
            url: "/forgotpassword",
            templateUrl: "app/auth/forgot_password.html",
             controller: "AuthController",
            controllerAs: 'Auth',
            data: { pageTitle: 'Reset Password' }
        })
        .state('app', {
            abstract: true,
            url: "/app",
            templateUrl: "components/common/content.html",
            resolve: {
              auth: validateUser
            }
        })
        .state('app.home', {
            url: "/home",
            templateUrl: "app/home/home.html"
        })
        .state('app.profile', {
            url: "/profile",
            templateUrl: "app/userProfile/profile.html"
        })

    $urlRouterProvider.otherwise('/index/login');
  });

        /////////////////////////
        //  RESOLVE FUNCTIONS //
        ///////////////////////

 /**
  * @param  {$auth --> ng-token-auth Service}
  * @return {The promise returned by this method can be used to prevent users from viewing 
  *          certain pages when using angular ui router resolvers.
  * }
  */
function validateUser($auth) {
    console.log("VALIDATING USER");
    return $auth.validateUser();
}
