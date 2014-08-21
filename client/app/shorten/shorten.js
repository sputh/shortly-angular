angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.loading = true;
  $scope.addLink = function() {
    Links.shorten().then(function(res) {
      $scope.loading = false;
      return res;
    });
  };
  $scope.submit = function() {
    console.log($scope.text);
    var jsoned = {url : $scope.text};
    console.log(jsoned);
      Links.shorten(jsoned)
      .then(function(data) {
        $scope.text = '';
        console.log(data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
});
