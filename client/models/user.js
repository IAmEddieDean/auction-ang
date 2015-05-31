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

  User.getContent = function(){
    return $http.get(nodeUrl + '/users/' + $rootScope.activeUser.lastName);
  };
  
  User.logView = function(itemId){
    return $http.put(nodeUrl + '/users', itemId);
  };

  return User;
});
