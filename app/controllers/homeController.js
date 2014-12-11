(function (define) {
	'use strict';

	define([ 'Module', 'Route' ], function (Module) {
		var Home = Module.create([ 'ngRoute' ], appName + '.Home');

		Home.config(function ($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '../app/views/homepage/index.html',
				controller: 'homeController'
			});
		});

		Home.controller('homeController', function ($scope) {
			$scope.message = 'Build the awesomeness in you!';
		});
	});

}(define));
