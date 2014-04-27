(function () {
  "use strict";

  var app = angular.module("app", []);

  app.controller("MainController", function ($scope) {
    $scope.todos = [];
    $scope.newTodo = "";

    $scope.addTodo = function () {
      $scope.todos.push({
        task: $scope.newTodo,
        completed: false
      });
      $scope.newTodo = "";
    };

    $scope.deleteTask = function (index) {
      $scope.todos.splice(index, 1);
    }

  })

}());