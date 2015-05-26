'use strict';

angular.module('auction')
.controller('NavCtrl', function($rootScope, $scope, $state, $http){
  function goHome(){
    $state.go('home');
  }

  $scope.logout = function(){
    $http.defaults.headers.common.Authorization = null;
    $rootScope.activeUser = null;
    goHome();
  };
});
