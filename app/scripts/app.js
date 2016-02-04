'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'easypiechart',
    'task',
    'qqq'

]);
app.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'templates/home.html',
	
	})
	.state('experience',{
		url:'/experience',
		templateUrl:'templates/experience.html'
	})
	.state('contact',{
		url:'/contact',
		templateUrl:'templates/contact.html'
	});
}]);

