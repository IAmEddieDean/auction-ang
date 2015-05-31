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
      $scope.viewed = resp.data.viewed;
      console.log(resp.data);
    }).catch(function(err){
      console.log(err);
    });
  }
  
  
});
