(function () {
	'use strict';

	require.config({
		baseUrl: 'vendor',
		paths: {
			jquery: 'jquery/dist/jquery',
			bootstrap: 'bootstrap/dist/js/bootstrap',
			angular: 'angular/angular',
			route: 'angular-route/angular-route',

			Module: '../app/module',
			app: '../app/app'
		},

		shim: {
			angular: [ 'jquery' ],
			bootstrap: [ 'jquery' ],
			Module: [ 'angular' ],
			route: [ 'angular' ]
		}
	});

	// Start Main App
	require([ 'app' ], function (App) {
		new App.init();
	});
//	require(['config'], function (Config) {
//
//		// Load RequireJS Config
//		require.config(Config);
//
//	});

}());
