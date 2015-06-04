'use strict';

angular.module('auction')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'HomeCtrl'})
  .state('cards', {url: '/cards', templateUrl: '/views/cards/cards.html', controller: 'CardCtrl'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('contact', {url: '/contact', templateUrl: '/views/general/contact.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/register.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/login.html', controller: 'UsersCtrl'})
  .state('userlist', {url: '/users', templateUrl: '/views/users/user-list.html', controller: 'UserListCtrl'})
  .state('dashboard', {url: '', templateUrl: '/views/users/dashboard.html', abstract: true})
  .state('dashboard.user', {url: '/dashboard/{lastName}', templateUrl: '/views/users/user-dashboard.html', controller: 'UserDashboardCtrl'})
  .state('dashboard.admin', {url: '/admin/dashboard', templateUrl: '/views/users/admin-dashboard.html', controller: 'AdminDashboardCtrl'})
  .state('client', {url: '', templateUrl: '/views/clients/client.html', abstract: true})
  .state('client.new', {url: '/clients/new', templateUrl: '/views/clients/new-client.html', controller: 'ClientCtrl'})
  .state('client.list', {url: '/clients', templateUrl: '/views/clients/client-list.html', controller: 'ClientListCtrl'})
  .state('auctions', {url: '/auctions', templateUrl: '/views/auctions/auctions.html', abstract: true})
  .state('auctions.add', {url: '/add', templateUrl: '/views/auctions/additem.html', controller: 'AuctionCtrl'})
  .state('auctions.list', {url: '', templateUrl: '/views/auctions/auctions-list.html', controller: 'AuctionListCtrl'})
  .state('auctions.show', {url: '/item/{itemId}', templateUrl: '/views/auctions/auctions-show.html', controller: 'ItemShowCtrl'});
});
