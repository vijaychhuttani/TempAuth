'use strict';

angular.module('readsupApp')
  .controller('AppController', AppController);

AppController.$inject = ['$scope', '$auth', '$rootScope', '$state', 'notify'];
function AppController($scope, $auth, $rootScope, $state, notify){

	//Notification Template
  	$scope.notificationTemplate = "../../components/common/notify.html";

	this.userName = 'Vijay Chhuttani';
	this.userProfileImageSmall = "../../assets/images/profile_small.jpg";

	this.handleLogout = function() {
		$auth.signOut()
		.then(function(resp) {
		// handle success response
		})
		.catch(function(resp) {
		});
	};


	/**
   * NG-TOKEN-AUTH EVENTS
   */
  
  $rootScope.$on('auth:validation-success', function() {
    $state.go('app.home'); 
  });         


  $rootScope.$on('auth:validation-error', function(){
      $state.go('index.login');  
      notify({
          message: "Please login to proceed.",
          classes: 'alert-info',
          templateUrl: $scope.notificationTemplate
      });
    });

  $rootScope.$on('auth:login-success', function(ev, user) {
    $state.go("app.home");
  });

  $rootScope.$on('auth:login-error', function(ev, reason) {
    notify({
          message: reason.errors[0],
          classes: 'alert-danger',
          templateUrl: $scope.notificationTemplate
      });
  });

  $rootScope.$on("auth:password-reset-request-success", function(ev, data) {
    notify({
          message: "Password reset instructions were sent to " + data.email,
          classes: 'alert-success',
          templateUrl: $scope.notificationTemplate
      });
  });

  $rootScope.$on("auth:password-reset-request-error", function(ev, resp) {
    notify({
          message: "Password reset request failed: " + resp.errors[0],
          classes: 'alert-danger',
          templateUrl: $scope.notificationTemplate
    });
  });

  $rootScope.$on('auth:logout-success', function(ev) {
    $state.go("index.login");
  });

  $rootScope.$on('auth:logout-error', function(ev, reason) {
    notify({
          message: 'logout failed because ' + reason.errors[0],
          classes: 'alert-danger',
          templateUrl: $scope.notificationTemplate
    });
  });

};
