'use strict';

angular.module('auction')
.controller('UsersCtrl', function($scope, $state, $window, User, states){
  $scope.states = states;
  $scope.submit = function(user){
    User.find(user)
    .then(function(response){
      console.log(response);
      if(response.data){
        User.login(user)
        .then(function(res){
          console.log(res);
          $state.go('dashboard.user', {userId: res.data._id});
        });
      }else{
        $state.go('register', user);
      }
    }).catch(function(){
      $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
    });
  };
});
