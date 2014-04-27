(function () {
  "use strict";

  var app = angular.module("app");

  app.controller("RestaurantsController", function ($scope, restaurantService, $routeParams) {
    $scope.restaurants = restaurantService.findAll();
    $scope.activeRestaurant = _.findWhere(restaurantService.findAll(), {id : $routeParams.restaurantId});
  });

}());