'use strict';

angular.module('auction')
.controller('ItemShowCtrl', function($scope, Item, $state, $rootScope, User){

  $scope.item = {};
  logView();
  getItem();
  $scope.confirm = false;
  
  function logView(){
    User.logView($scope.item._id)
    .then(function(resp){
      console.log(resp);
    }).catch(function(err){
      console.log(err);
    });
  }

  $scope.bid = function(item){
    var obj = {};
    // obj.currentPrice = item.currentPrice;
    obj.bid = item.bid;
    // obj._id = item._id;
    Item.bid(obj, item._id)
    .then(function(resp){
      $scope.item = resp.data.item;
      $rootScope.activeUser = resp.data.user;
    }).catch(function(err){
      console.log(err);
    });
  };

  $scope.bidConfirm = function(arg){
    $scope.confirm = arg;
    return;
  };
  
  function getItem(){
    Item.find($state.params.itemId)
    .then(function(resp){
      $scope.item = resp.data;
    }).catch(function(err){
      console.log(err);
    });
  }
});
