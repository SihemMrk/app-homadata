(function() {
  var app = angular.module("app");
  var FormCtrl = function($scope, EstimationData) {
    $scope.type = {
      name: "",
      surface: 0,
      pieces: 0,
      prix: 0,
      etat: ""
    };
    EstimationData.setVariable($scope.type);
  };

  app.controller("FormCtrl", FormCtrl);
})();
