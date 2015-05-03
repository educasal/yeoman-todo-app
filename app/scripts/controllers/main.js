'use strict';

/**
 * @ngdoc function
 * @name yeomanTodoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanTodoAppApp
 */
angular.module('yeomanTodoAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Processing'
    ];

    $scope.addToDo = function () {
    	if($scope.todo && ($scope.todos.indexOf($scope.todo) === -1)){
    		$scope.todos.push($scope.todo);	
    		$scope.todo = '';    		
    	}
    };

    $scope.removeToDo = function (index) {
    	$scope.todos.splice(index, 1)
    };
  });
