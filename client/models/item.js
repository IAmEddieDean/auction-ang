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
  Item.bid = function(item){
    return $http.put(nodeUrl + '/items/' + item._id, item);
  };
  return Item;
});
