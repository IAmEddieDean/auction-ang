'use strict';

angular.module('auction')
.factory('Auction', function($http, nodeUrl){

  function Auction(){}
  
  Auction.addItem = function(item){
    return $http.put(nodeUrl + '/auctions');
  };
  Auction.findAll = function(){
    return $http.get(nodeUrl + '/auctions');
  };
  
  return Auction;
})

.factory('Item', function($http, nodeUrl){
  function Item() {}
  Item.findAll = function(){
    return $http.get(nodeUrl + '/items');
  }
  return Item;
});
