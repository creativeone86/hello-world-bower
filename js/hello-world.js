/**
 * Created by yordan on 4/13/16.
 */
'use strict';

angular.module('io.hello-world', [])
	.directive('helloWorld', function() {
		return {
			// test comments
			scope: {
				content: '='
			},
			template: '<p class="hello-world">{{content}}</p>',
			controller: ['$scope', function($scope) {
				$scope.test = 'Hello world';
			}]
		};
	});