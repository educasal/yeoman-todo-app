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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
