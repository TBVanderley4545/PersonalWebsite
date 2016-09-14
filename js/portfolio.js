(function() {
  var app = angular.module('portfolio-items',[]);

  app.directive("portfolioItem", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/portfolio-item.html'
    };
  });

})();
