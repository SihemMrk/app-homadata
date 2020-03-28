angular.module("serviceApp", ["ngResource", "ngRoute", "services"]);

angular
  .module("serviceApp")
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "/partials/home",
        controller: "HomeCtrl"
      })
      .when("/form", {
        templateUrl: "/partials/form",
        controller: "FormCtrl"
      })
      .when("/estimation", {
        templateUrl: "/partials/estimation",
        controller: "EstimationCtrl"
      });
  });
