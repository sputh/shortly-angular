angular.module('shortly.links.directives', [])

.directive('linksObject', function () {
  // Your code here
  // Function: Show links to User
  var link = function (scope, element, attrs) {
    console.log("scope",scope);
    console.log("element",element);
    console.log("attrs", attrs);
    console.log('url', scope.urlInDirective);
    scope.url = scope.urlInDirective;
  }

  return {
    restrict: 'EA',
    templateUrl: 'app/links/linkDir.html',
    link: link,
    scope: {
      urlInDirective: '='
    }
  }
});
