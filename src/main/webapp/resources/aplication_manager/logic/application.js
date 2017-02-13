'use strict'

var app = angular.module('taskApp', ['ngRoute','commonMod','authMod','dashMod']).

config(['$httpProvider', '$compileProvider', function($httpProvider,$compileProvider) {
	
	$compileProvider.debugInfoEnabled(false);
	
    $httpProvider.defaults.timeout = 5000;
    
/*test*/
    $httpProvider.useApplyAsync(true);
    
}]);