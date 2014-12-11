/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			js: {
				options: {
					uglify2: {
						mangle: false
					},
					appDir: "./",
					baseUrl: "vendor",
					include: ['app'],
					mainConfigFile: "./app/main.js",
					name: '../app/main',
					dir: 'dist',
					optimize: 'uglify2',
					removeCombined: true,
					findNestedDependencies: true,
					optimizeCss: 'standard'
				}
			}
		},

		// Environment Switcher
//		replace: {
//			production: {
//				options: {
//					patterns: [
//						{ json: grunt.file.readJSON('./config/production/production.json') }
//					]
//				},
//
//				files: [
//					{
//						expand: true,
//						flatten: true,
//						src: ['./config/module.js'],
//						dest: 'scripts/app/'
//					}
//				]
//			},
//			local: {
//				options: {
//					patterns: [
//						{ json: grunt.file.readJSON('./config/development/development.json') }
//					]
//				},
//
//				files: [
//					{
//						expand: true,
//						flatten: true,
//						src: ['./config/module.js'],
//						dest: 'scripts/app/'
//					}
//				]
//			}
//		},

		// Clean files after build
		shell: {
			cleanDir: {
				command: [
					'cd dist/',
					'rm -rf config/ scripts/app/ ^node',
					'rm -rf .bowerrc BaseGruntfile.js build.txt bower.json package.json readme.md',
					'cd scripts/libs/',
					'shopt -s extglob',
					'rm -rf !(requirejs)'	// Remove all libraries exept requirejs
				].join('&&')
			}
		},
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-shell');

	// Default task.
	grunt.registerTask('default', ['requirejs']);

};
