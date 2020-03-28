var services = angular.module("services", []);
services.factory("EstimationData", function() {
  var estimationData = {
    hello: "world"
  };
  return estimationData;
});
