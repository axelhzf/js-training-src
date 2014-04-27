var app = angular.module("app", ["ngRoute", "google-maps", "ui.bootstrap"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/restaurants', {
      templateUrl: 'templates/restaurants.html',
      controller: 'RestaurantsController'
    })
    .when('/restaurants/:restaurantId', {
      templateUrl: 'templates/restaurants.html',
      controller: 'RestaurantsController'
    })
    .otherwise({
      redirectTo: '/restaurants'
    });
});



