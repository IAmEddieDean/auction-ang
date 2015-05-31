'use strict';

angular.module('auction')
.controller('UserDashboardCtrl', function($scope, User){
  $scope.invoices = [];
  $scope.viewed = [];
  $scope.bidOn = [];
  
  getContent();

  
  function getContent(){
    User.getContent()
    .then(function(resp){
      $scope.bidOn = resp.data.bidOn;
      console.log($scope.bidOn);
    }).catch(function(err){
      console.log(err);
    });
  }
  
  
});
