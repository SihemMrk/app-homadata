(function() {
  var app = angular.module("app");
  var HomeCtrl = function($scope) {
    $scope.myVar = "Estimez votre bien";
  };

  app.controller("HomeCtrl", HomeCtrl);
})();
