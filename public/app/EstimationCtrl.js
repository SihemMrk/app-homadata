(function() {
  var app = angular.module("app");
  var EstimationCtrl = function($scope, EstimationData) {
    $scope.estimation = "estimation";
    console.log(EstimationData.hello);
  };
  app.controller("EstimationCtrl", [
    "$scope",
    "EstimationData",
    EstimationCtrl
  ]);
})();
