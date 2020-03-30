(function() {
  var app = angular.module("app");
  var EstimationCtrl = function($scope, EstimationData) {
    var data = EstimationData.getVariables();
    $scope.data = data;

    EstimationData.estimation().then(function(response) {
      $scope.estimation = response.data;
    });
  };
  app.controller("EstimationCtrl", [
    "$scope",
    "EstimationData",
    EstimationCtrl
  ]);
})();
