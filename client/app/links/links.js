angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Function: Show links to User
  $scope.data = {};
  $scope.test = "Hello, Jack";

  $scope.getLinks = function() {
    Links.links().then(function(res) {
      $scope.data.links = res;
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.getLinks();
});
