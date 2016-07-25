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

  app.directive("columnTwo", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/columnTwo.html'
    };
  });

  app.directive("columnThree", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/columnThree.html'
    };
  });
  
})();
