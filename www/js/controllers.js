angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('UnicornsCtrl', function($scope, Unicorns) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  $scope.$on('$ionicView.enter', function(e) {
  });

  $scope.getData = function() {
    $http.get("http://localhost/example.json")
      .success(function(data) {
        $scope.type = data.type;
        $scope.id = data.id;
      })
      .error(function(data) {
        alert("ERROR");
      });
  }
})

.controller('UnicornDetailCtrl', function($scope, $stateParams, Unicorns) {
  $scope.unicorn = Unicorns.get($stateParams.unicornId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
