'use strict';

angular.module('auction')
.factory('Auction', function($http, nodeUrl){

  function Auction(){}
  
  Auction.addItem = function(item){
    return $http.put(nodeUrl + '/auctions');
  };
  
  
  return Auction;
});
