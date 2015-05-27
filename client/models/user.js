'use strict';

angular.module('auction')
.factory('User', function($rootScope, $http, nodeUrl){
  function User(){
  }

  User.register = function(user){
    return $http.post(nodeUrl + '/users', user);
  };

  User.login = function(info){
    return $http.post(nodeUrl + '/users/authenticate', info);
  };

  User.find = function(info){
  };

  return User;
});
