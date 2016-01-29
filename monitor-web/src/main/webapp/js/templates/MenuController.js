angular.module('app.controllers')
.controller('menuController',
	['$scope', '$http', '$state', 'botonTexto',function($scope, $http, $state, botonTexto){
	// establece el texto en la applicacion
	$scope.botonTexto = botonTexto;

	$scope.menu = [
	{ nombre : 'Menu 1' },
	{ nombre : 'Menu 2' },
	{ nombre : 'Menu 3' },
	{ nombre : 'Menu 4' },
	{ nombre : 'Menu 5' }];

	$scope.viewTimeLog = function(){
		$state.go('timeLog');
	};
}]);