'use strict';

angular.module('auction')
.factory('Auction', function($http, nodeUrl){

  function Auction(){}
  
  Auction.add = function(auction){
    return $http.post(nodeUrl + '/auctions', auction);
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
