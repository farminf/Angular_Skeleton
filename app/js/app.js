'use strict';

/*
 * Host angular app, in the long term this will just contain a list of modules
 * on which the app depends, i.e., of widgets used by the app.
 */

var application = angular.module('application', ['ngRoute' , 'dashNavigation' , 'restangular']);

// declare the routes
application.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/home.html'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});	
}]);

// the app controller
application.controller('skeletonCtrl', //controller name
	['$scope',
	'Restangular',
	'$attrs', 
	function($scope, Restangular, $attrs) {
		var ctrl = this;	
}]);

//Configure restangular base url
application.config(function(RestangularProvider) {
	RestangularProvider
			.setBaseUrl('http://localhost:8080/api');
});


