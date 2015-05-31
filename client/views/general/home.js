'use strict';

angular.module('auction')
.controller('HomeCtrl', function($state, $scope, $rootScope, User, Item, $window, $http){
  
  $scope.items = [];
  
  getItems();

  function getItems(){
    Item.findSome()
    .then(function(resp){
      $scope.items = resp.data.map(function(item){ item.confirm = false; return item; });
      console.log(resp);
    }).catch(function(err){
      console.log(err);
    });
  }
  $scope.submit = function(user){
    User.login(user)
    .then(function(response){
      $rootScope.activeUser = response.data.user;
      $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
    })
    .catch(function(res){
      if(res.status === 418){
        $state.go('register');
      }else{
        $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
      }
    });
  };
  
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
    }).catch(function(err){
      $window.swal({title: 'Bidding Error', text: "There was a problem with your bid. Either you aren't logged in, or your bid was too low. Please try again", type: 'error'});
      console.log(err);
    });
  };
});
