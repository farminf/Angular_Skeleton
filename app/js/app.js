'use strict';

/*
 * Host angular app, in the long term this will just contain a list of modules
 * on which the app depends, i.e., of widgets used by the app.
 */

var app = angular.module('app', ['ngRoute' , 'dashNavigation']);

// declare the routes
app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/home.html'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
} ]);

// the app controller
// app.controller('skeletonCtrl', // controller name
// 	['$scope',
// 	'Restangular',
// 	'$attrs', 
// 	function($scope, Restangular, $attrs) {

							
// } ]);




// app.config(function(RestangularProvider) {
// 	RestangularProvider
// 			.setBaseUrl('http://localhost:8080/api');
// });


