(function() {
  var serviceApp = angular.module("serviceApp");
  var HomeCtrl = function($scope) {
    $scope.myVar = "Estimez votre bien";
  };

  serviceApp.controller("HomeCtrl", HomeCtrl);
})();
