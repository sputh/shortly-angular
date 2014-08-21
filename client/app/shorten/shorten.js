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
  $scope.submitForm = function(isValid) {
    if (isValid) {
      $scope.addLink();
    };
  }
});
