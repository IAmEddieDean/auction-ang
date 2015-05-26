'use strict';

angular.module('auction')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }

  User.initialize = function(){
    return $http.post(nodeUrl + '/users');
  };
  
  User.login = function(info){
    return $http.post(nodeUrl + '/users/authenticate', info);
  };
  
  User.find = function(info){
    return $http.get(nodeUrl + '/users/' + info.email + '/' + info.password);
  };

  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };
  
  return User;
});
