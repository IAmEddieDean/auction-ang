'use strict';

angular.module('auction')
.controller('ClientCtrl', function($scope, Client, states){
  $scope.states = states;
  
  $scope.register = function(client){
    Client.register(client)
    .then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log(err);
    });
  };
});
