'use strict';

angular.module('auction')
.controller('UserListCtrl', function($scope, $state, User){
  $scope.users = [];
  
  getUsers();
  
  function getUsers(){
    User.findAll()
    .then(function(resp){
      $scope.users = resp.data;
    }).catch(function(err){
      console.log(err);
    });
  }
});
