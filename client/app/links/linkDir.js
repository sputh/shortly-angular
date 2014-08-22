angular.module('shortly.links.directives', [])
  .directive('linksList', function(){
    var link = function(scope, element, attrs) {
      scope.url = scope.dirUrl;
    }
    return {
      restrict: 'E',
      templateUrl: '/app/links/linkDir.html',
      link: link,
      scope: {
        dirUrl: '='
      }
    }
  });
