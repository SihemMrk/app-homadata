(function() {
  var app = angular.module("app", ["service"]);
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
