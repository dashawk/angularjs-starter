(function (define) {
	'use strict';

	define([ 'angular' ], function () {
		return {
			create: function (dependencies, moduleName) {
				var App = angular.module(moduleName, dependencies);

				// Put your configurations here
				var config = {};

				App.constant('config', config);

				return App;
			}
		};
	});

}(define));
