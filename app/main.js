(function () {
	'use strict';

	require(['config'], function (Config) {

		// Load RequireJS Config
		require.config(Config);

		// Start Main App
		require([ 'App' ], function (App) {
			new App.init();
		});
	});

}());
