var app = angular.module("app");

app.service("EstimationData", function($http) {
  var sharedVariables = {};

  this.getVariables = getVariables;
  this.setVariable = setVariable;
  this.estimation = estimation;

  function getVariables() {
    return sharedVariables;
  }
  function setVariable(value) {
    sharedVariables = value;
  }

  function estimation() {
    return $http.post("/data", sharedVariables);
  }
});
