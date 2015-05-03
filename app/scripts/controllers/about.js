'use strict';

/**
 * @ngdoc function
 * @name yeomanTodoAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yeomanTodoAppApp
 */
angular.module('yeomanTodoAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
