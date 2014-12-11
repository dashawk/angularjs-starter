(function (define) {
	'use strict';

	define([ 'Module' ], function (Module) {
		var Loader = Module.create([], appName + '.Loader');

		Loader.directive('loader', function () {
			return {
				restrict: 'EA',
				transclude: true,
				replace: true,
				templateUrl: 'app/views/directives/loader.html'
			};
		});
	});

}(define));
