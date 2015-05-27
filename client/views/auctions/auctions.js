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
});
