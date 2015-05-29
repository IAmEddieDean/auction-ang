'use strict';

// $(document).ready();
//
// // function init(){
//   $('#datetimepicker6').datetimepicker();
//   $('#datetimepicker7').datetimepicker();
//   $("#datetimepicker6").on("dp.change", function (e) {
//     $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
//   });
//   $("#datetimepicker7").on("dp.change", function (e) {
//     $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
//   });
// }

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
      console.log('these are the auctions', resp);
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
      console.log(resp);
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
})
















.controller('AuctionListCtrl', function($scope, Auction, User, Client, Item, $state){
  getItems();
  getClients();

  $scope.items = [];
  $scope.clients = [];
  $scope.auctions = [];
  // $scope.confirm = false;

  $scope.bidConfirm = function(item){
    item.confirm = true;
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

})

.controller('ItemShowCtrl', function($scope, Item, $state){
  $scope.item = {};
  
  getItem();
  
  function getItem(){
    Item.find($state.params.itemId)
    .then(function(resp){
      $scope.item = resp.data;
    }).catch(function(err){
      console.log(err);
    });
  }
});
