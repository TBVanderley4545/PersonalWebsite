(function() {
  var app = angular.module('site', ['portfolio-items']);

  app.controller('androidController', function() {
      this.items = androidItems;
  });

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

  app.directive("siteFooter", function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/site-footer.html'
    };
  });

var androidItems = [
  {
    imageResource: "assets/img/whs-app.png",
    altDescription: "The Play Store listing for the Watauga Humane Soceity app.",
    caption: "The WHS App is on the Google Play Store now.",
  },
  {
    imageResource: "assets/img/scroll_view.png",
    altDescription: "The default scroll view of the application.",
    caption: "The main screen for the WHS application.",
  },
  {
    imageResource: "assets/img/search_view.png",
    altDescription: "The search view for the application.",
    caption: "An example of the search feature for the WHS application.",
  },
  {
    imageResource: "assets/img/detail_view.png",
    altDescription: "The detail view for animals in the application.",
    caption: "An example of the search feature for the WHS application.",
  },
  {
    imageResource: "assets/img/sidemenu_view.png",
    altDescription: "The side menu for the application.",
    caption: "A navigation drawer to decide which species to filter.",
  }
];

})();
