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
.controller('AuctionCtrl', function(states, $scope, Auction){
  $scope.states = states;
  $scope.add = function(item){
    Auction.addItem(item)
    .then(function(response){
      console.log(response);
    }).catch(function(err){
      console.log(err);
    });
  };
})

.controller('AuctionListCtrl', function($scope, Auction, User, Client, Item){
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

});
