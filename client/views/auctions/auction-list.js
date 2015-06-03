'use strict';

angular.module('auction')
.controller('AuctionListCtrl', function($scope, Auction, User, Client, Item, $state, $window, $rootScope){
  getItems();
  getClients();


  $scope.items = [];
  $scope.clients = [];
  $scope.auctions = [];
  $scope.confirm = false;
  setInterval(checkTime, 1000);
  
  function checkTime(){
    $scope.items.forEach(function(item){
      var time = moment(item.endTime).unix();
      item.active = time > moment().unix() ? true : false;
    });
    $scope.$apply();
  }
  // $scope.isDays = function(time){
  //   console.log(moment(time).fromNow() > );
  //   // return moment(time).unix()
  //
  // }

  $scope.bidConfirm = function(item, arg){
    item.confirm = arg;
    return;
  };

  function getItems(){
    Item.findAll()
    .then(function(resp){
      $scope.items = resp.data.map(function(item){ item.confirm = false; return item; });
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

  $scope.bid = function(item){
    var obj = {};
    obj.bid = item.bid;
    Item.bid(obj, item._id)
    .then(function(resp){
      item = resp.data.item;
      $rootScope.activeUser = resp.data.user;
    }).catch(function(err){
      $window.swal({title: 'Bidding Error', text: "There was a problem with your bid. Either you aren't logged in, or your bid was too low. Please try again", type: 'error'});
      console.log(err);
    });
  };

});
