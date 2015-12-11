angular
    .module('readsupApp')
    .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$auth'];
function AuthController($scope, $auth) {

  //Auth Forms
  $scope.registrationForm = {};
  $scope.loginForm = {};
  $scope.pwdResetForm = {};

  $scope.handleEmailRegistration = function() {
       console.log($scope.registrationForm);
    $auth.submitRegistration($scope.registrationForm)
      .then(function(resp) {

      })
      .catch(function(resp) {

      });
  };
    
  $scope.handleFacebookAuth = function() {
       $auth.authenticate('facebook')
       .then(function(resp) {
        console.log("FB LOGIN SUCCESS");
        console.log(resp);
      })
      .catch(function(resp) {
        console.log("FB LOGIN FAILURE");
        console.log(resp);
      });
  };

  $scope.handleGoogleAuth= function() {
       $auth.authenticate('google')
       .then(function(resp) {
        console.log("Google LOGIN SUCCESS");
        console.log(resp);
      })
      .catch(function(resp) {
        console.log("Google LOGIN FAILURE");
        console.log(resp);
      });
  };


  $scope.handleEmailLogin = function() {
    $auth.submitLogin($scope.loginForm)
      .then(function(resp) {
        // handle success response
      })
      .catch(function(resp) {
        console.log("Error:" + resp.errors);
      });
  };  

  $scope.handlePasswordReset = function(){
    $auth.requestPasswordReset($scope.pwdResetForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

};
