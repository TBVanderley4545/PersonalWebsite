(function() {
  var app = angular.module('site', []);

  app.directive("siteHeader", function() {
    return {
      restrict:'E',
      templateUrl: 'directives/site-header.html'
    };
  });
})();
