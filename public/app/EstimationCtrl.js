(function() {
  var serviceApp = angular.module("serviceApp", ["services"]);
  var EstimationCtrl = function($scope, EstimationData) {
    $scope.estimation = "estimation";
    console.log(EstimationData.hello);
  };
  serviceApp.controller("EstimationCtrl", [
    "$scope",
    "EstimationData",
    EstimationCtrl
  ]);
})();
