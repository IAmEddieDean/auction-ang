'use strict';

angular.module('auction')
.controller('UserDashboardCtrl', function($scope, User, $window, $rootScope, Item){
  $scope.invoices = [];
  $scope.viewed = [];
  $scope.bidOn = [];
  getContent();


  function getContent(){
    User.getContent()
    .then(function(resp){
      $scope.bidOn = resp.data.bidOn.map(function(item){ item.confirm = false; return item; });
      $scope.viewed = resp.data.viewed.map(function(item){ item.confirm = false; return item; });
      console.log(resp.data);
    }).catch(function(err){
      console.log(err);
    });
  }

  $scope.bidConfirm = function(item, arg){
    item.confirm = arg;
    return;
  };

  $scope.bid = function(item){
    var obj = {};
    obj.bid = item.bid;
    Item.bid(obj, item._id)
    .then(function(resp){
      // $scope.$digest();
      // $scope.$apply(function(){
      //   item = resp.data.item;
      // });
      $scope.bidConfirm(item, false);
      $rootScope.activeUser = resp.data.user;
    }).catch(function(err){
      $window.swal({title: 'Bidding Error', text: "There was a problem with your bid. Either you aren't logged in, or your bid was too low. Please try again", type: 'error'});
      console.log(err);
    });
  };

});
