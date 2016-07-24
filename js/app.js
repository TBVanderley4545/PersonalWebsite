(function() {
  var app = angular.module('site', []);

  app.directive("siteHeader", function() {
    return {
      restrict:'E',
      templateUrl: 'directives/site-header.html'
    };
  });

  app.directive("columnOne", function() {
    return {
      restrict:'E',
      templateUrl: 'directives/columnOne.html'
    };
  });
})();
