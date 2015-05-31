'use strict';

angular.module('auction')
.controller('AuctionCtrl', function(states, $scope, Auction, Client, Item, $state){

  $scope.states = states;
  $scope.newAuction = false;
  $scope.clients = [];
  $scope.auctions = [];
  $scope.auction = {};
  $scope.item = {};

  getAuctions();
  getClients();

  function getClients(){
    Client.findAll()
    .then(function(resp){
      $scope.clients = resp.data.map(function(c){ return c.displayName; });
    }).catch(function(err){
      console.log(err);
    });
  }

  function getAuctions(){
    Auction.findAll()
    .then(function(resp){
      $scope.auctions = resp.data.map(function(a){ return a.name; });
    }).catch(function(err){
      console.log(err);
    });
  }

  $scope.addAuction = function(arg){
    $scope.newAuction = arg;
    return;
  };

  $scope.save = function(item){
    Item.save(item)
    .then(function(resp){
      $scope.item = {};
    }).catch(function(err){
      console.log(err);
    });
  };

  $scope.add = function(auction){
    console.log(auction);
    Auction.add(auction)
    .then(function(resp){
      $scope.clients.push(resp.data);
      $scope.auction = {};
      $scope.newAuction = false;
    }).catch(function(err){
      console.log(err);
    });
  };
});
