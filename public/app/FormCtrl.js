(function() {
  var app = angular.module("app");
  var FormCtrl = function($scope) {
    $scope.type = {
      name: "",
      surface: 0,
      pieces: 0,
      prix: 0,
      etat: ""
    };
  };

  app.controller("FormCtrl", FormCtrl);
})();
