'use strict'

angular.module('auction')
.controller('ClientListCtrl', function($scope, $state, Client){
  $scope.clients = [];
  
  getClients();
  
  function getClients(){
    Client.findAll()
    .then(function(resp){
      $scope.clients = resp.data;
    }).catch(function(err){
      console.log(err);
    });
  }
  
});
