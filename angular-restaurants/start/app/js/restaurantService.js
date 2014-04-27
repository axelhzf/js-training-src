(function () {
  "use strict";

  var restaurants = [
    {
      id: "1",
      name: "restaurant1",
      description: "restaurant 1 description",
      coords: {
        latitude: 28.487865,
        longitude: -16.315912
      },
      images : [
        "http://www.alastairbathgate.com/wp-content/uploads/2007/09/san-carlo-outside.JPG",
        "http://www.restaurantsinberwick.com.au/wp-content/uploads/2013/11/restaurants-3.jpg",
        "http://cdn3.vtourist.com/4/6136980-outside_Gilroy.jpg?version=2",
      ]
    },
    {
      id: "2",
      name: "restaurant2",
      description: "restaurant 2 description",
      coords: {
        latitude: 28.488675,
        longitude: -16.320289
      },
      images : [
        "http://cdn3.vtourist.com/4/6136980-outside_Gilroy.jpg?version=2",
        "http://www.alastairbathgate.com/wp-content/uploads/2007/09/san-carlo-outside.JPG"
      ]
    },
    {
      id: "3",
      name: "restaurant3",
      description: "restaurant3 description",
      coords: {
        latitude: 28.483961,
        longitude: -16.317049
      },
      images : [
        "http://www.restaurantsinberwick.com.au/wp-content/uploads/2013/11/restaurants-3.jpg",
        "http://cdn3.vtourist.com/4/6136980-outside_Gilroy.jpg?version=2",
        "http://www.alastairbathgate.com/wp-content/uploads/2007/09/san-carlo-outside.JPG",
      ]
    }
  ];

  var restaurantService = {
    findAll: function () {
      return restaurants;
    }
  };

  var app = angular.module("app");
  app.factory("restaurantService", function () {
    return restaurantService;
  });

}());
