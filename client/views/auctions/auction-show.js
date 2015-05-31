'use strict';

angular.module('auction')
.controller('ItemShowCtrl', function($scope, Item, $state, $rootScope, User){

  $scope.item = {};
  getItem();
  $scope.confirm = false;
  
  function logView(){
    var id = {itemId: $scope.item._id};
    User.logView(id)
    .then(function(resp){
      $rootScope.activeUser = resp.data;
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
      logView();
    }).catch(function(err){
      console.log(err);
    });
  }
});
