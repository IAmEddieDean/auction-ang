'use strict';

angular.module('auction')
.controller('UsersCtrl', function($scope, $state, $window, User, states, $rootScope, $http){
  $scope.isEdit = $rootScope.activeUser ? true : false;
  $scope.user = $scope.isEdit ? $rootScope.activeUser : {};
  $scope.states = states;
  $scope.submit = function(user){
    User.login(user)
    .then(function(response){
      $rootScope.activeUser = response.data.user;
      $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
      if(response.data.user.role > 1){
        $state.go('dashboard.admin');
      }else{
        $state.go('dashboard.user', {lastName: response.data.user.lastName});
      }
    })
    .catch(function(res){
      if(res.status === 418){
        $state.go('register');
      }else{
        $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
      }
    });
  };

  $scope.register = function(user){
    if(user.password1 !== user.password2){
      $window.swal({title: 'Registration Error', text: "Your passwords don't match. Please try again.", type: 'error'});
      $scope.user.password1 = null;
      $scope.user.password2 = null;
    }else{
      user.password = user.password1;
      delete user.password1;
      delete user.password2;
      User.register(user)
      .then(function(response){
        $rootScope.activeUser = response.data;
        $state.go('dashboard.user');
      }).catch(function(){
        $window.swal({title: 'Login Error', text: 'There was a problem with your login. Please try again.', type: 'error'});
      });
    }
  };
});
