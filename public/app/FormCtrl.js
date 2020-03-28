(function() {
  var serviceApp = angular.module("serviceApp");
  var FormCtrl = function($scope) {
    $scope.type = {
      name: "",
      surface: 0,
      pieces: 0,
      prix: 0,
      etat: ""
    };
  };

  serviceApp.controller("FormCtrl", FormCtrl);
})();
