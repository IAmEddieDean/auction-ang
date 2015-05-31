'use strict';

angular.module('auction')
.controller('AuctionListCtrl', function($scope, Auction, User, Client, Item, $state){
  getItems();
  getClients();


  $scope.items = [];
  $scope.clients = [];
  $scope.auctions = [];
  $scope.confirm = false;

  $scope.bidConfirm = function(arg){
    $scope.confirm = arg;
    return;
  };
  $scope.bidCancel = function(item){
    item.confirm = false;
    return;
  };

  function getItems(){
    Item.findAll()
    .then(function(resp){
      $scope.items = resp.data.map(function(item){ item.confirm = false; return item; });
      console.log(resp);
    }).catch(function(err){
      // console.log(err);
    });
  }

  function getClients(){
    Client.findAll()
    .then(function(resp){
      $scope.clients = resp.data;
      // console.log(resp);
    }).catch(function(err){
      // console.log(err);
    });
  }

});
