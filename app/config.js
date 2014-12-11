(function (define) {
	'use strict';

	define({
		baseUrl: 'vendor',
		paths: {
			jQuery: 'jquery/dist/jquery',
			Bootstrap: 'bootstrap/dist/js/bootstrap',
			Angular: 'angular/angular',
			Route: 'angular-route/angular-route',

			Module: '../app/module',
			App: '../app/app'
		},

		shim: {
			Angular: [ 'jQuery' ],
			Bootstrap: [ 'jQuery' ],
			Route: [ 'Angular' ]
		}
	});

}(define));
