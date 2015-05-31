'use strict';

angular.module('auction')
.factory('Item', function($http, nodeUrl){
  function Item(){}
  
  Item.save = function(item){
    return $http.post(nodeUrl + '/items', item);
  };
  Item.findAll = function(){
    return $http.get(nodeUrl + '/items');
  };
  Item.find = function(id){
    return $http.get(nodeUrl + '/items/' + id);
  };
  Item.bid = function(bid, id){
    return $http.put(nodeUrl + '/items/' + id, bid);
  };
  Item.findSome = function(){
    return $http.get(nodeUrl + '/items/8');
  };
  return Item;
});
