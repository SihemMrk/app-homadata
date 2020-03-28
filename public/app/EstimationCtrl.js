(function() {
  var app = angular.module("app");
  var EstimationCtrl = function($scope) {
    $scope.estimation = "estimation";
  };

  app.controller("EstimationCtrl", EstimationCtrl);
})();
