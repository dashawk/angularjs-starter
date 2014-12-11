(function (define) {
	'use strict';

	define(
		[
			'Module',
			'route',

			// Controllers
			'../app/controllers/homeController',

			// Directives
			'../app/directives/loaderDirective'
		],

		function (Module) {
			var App = Module.create([
				'ngRoute',

				// Controllers
				appName + '.Home',

				// Directives
				appName + '.Loader'
			], appName);

			// AngularJS Manual Bootstrapping
			App.init = function () {
				angular.element(document).ready(function () {
					angular.bootstrap(document, [appName]);
				});
			};

			App.config(function ($routeProvider) {
				$routeProvider.otherwise({ redirectTo: '/' });
			});

			return App;
		}
	);

}(define));
