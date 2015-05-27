'use strict';

angular.module('auction')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/register.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/login.html', controller: 'UsersCtrl'})
  .state('dashboard', {url: '', templateUrl: '/views/users/dashboard.html', abstract: true})
  .state('dashboard.user', {url: '/dashboard/{lastName}', templateUrl: '/views/users/user-dashboard.html', controller: 'DashboardCtrl'})
  .state('auctions', {url: '/auctions', templateUrl: '/views/auctions/auctions.html', abstract: true})
  .state('auctions.add', {url: '/auctions/add', templateUrl: '/views/auctions/additem.html', controller: 'AuctionCtrl'});
});
