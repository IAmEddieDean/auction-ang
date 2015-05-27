'use strict';

angular.module('auction')
.factory('Client', function($http, nodeUrl){
  function Client(){}
  
  Client.findAll = function(){
    return $http.get(nodeUrl + '/clients');
  };
  
  return Client;
});
