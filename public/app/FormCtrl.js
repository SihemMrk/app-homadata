(function() {
  var app = angular.module("app");
  var FormCtrl = function($scope, $location, EstimationData) {
    $scope.type = {
      name: "",
      surface: 0,
      pieces: 0,
      prix: 0,
      etat: ""
    };
    $scope.submit = function() {
      EstimationData.setVariable($scope.type);
      if (
        $scope.type.name &&
        $scope.type.surface &&
        $scope.type.pieces &&
        $scope.type.prix &&
        $scope.type.etat
      ) {
        $location.path("/estimation", false);
      }
    };

    return $scope.submit;
  };

  app.controller("FormCtrl", FormCtrl);
})();
