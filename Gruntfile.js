module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			helloWorld: {
				files: {
					'./js/hello-world.min.js': ['./js/hello-world.js']
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> (<%= pkg.homepage %>) */\n'
			},
			minify: {
				files: {
					'css/hello-world.min.css': ['css/hello-world.css']
				}
			}
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-myth');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['uglify', 'cssmin']);
	grunt.registerTask('css', ['cssmin']);


};