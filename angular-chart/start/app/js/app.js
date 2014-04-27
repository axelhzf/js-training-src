var app = angular.module("app", []);

app.controller("IndexController", function ($scope) {
  $scope.title = "Chart title";
  $scope.series = [
    {
      name: 'serie1',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    },
    {
      name: 'serie2',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    }
  ];

  $scope.addSerie = function () {
    var randomData = [];
    for (var i = 0; i < 12; i++) {
      randomData[i] = _.random(0, 100);
    }
    $scope.series.push({
      name: "serie",
      data: randomData
    });
  }

});

app.directive("highchart", function () {

});