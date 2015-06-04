'use strict'

angular.module('auction')

.controller('CardCtrl', function($scope, Item, $window, $rootScope){
  getItems();
  
  setInterval(checkTime, 1000);
  
  function checkTime(){
    $scope.items.forEach(function(item){
      var time = moment(item.endTime).unix();
      item.active = time > moment().unix() ? true : false;
    });
    $scope.$apply();
  }

  function getItems(){
    Item.findSome()
    .then(function(resp){
      $scope.items = resp.data.map(function(item){ item.confirm = false; return item; });
      console.log(resp);
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
      item = resp.data.item;
      $rootScope.activeUser = resp.data.user;
      getItems();
    }).catch(function(err){
      $window.swal({title: 'Bidding Error', text: "There was a problem with your bid. Either you aren't logged in, or your bid was too low. Please try again", type: 'error'});
      console.log(err);
    });
    
  };
});
