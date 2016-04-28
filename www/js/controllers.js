angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('UnicornsCtrl', function($scope, $timeout, $ionicModal, UnicornService) {

    UnicornService.GetUnicorns().then(function(unicorns){
      $scope.unicorns = unicorns;
    });

    $scope.loadMore = function(){
      UnicornService.GetMoreUnicorns().then(function(unicorns) {
          $scope.unicorns = $scope.unicorns.concat(unicorns);

          $scope.$broadcast('scroll.infiniteScrollComplete');
      });
    };

    $scope.showImages = function(index) {
      $scope.activeSlide = index;
      $scope.showModal('templates/image-popover.html');
    };

    $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
    }

    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };

});

// .controller('UnicornsCtrl', ['$scope', 'Unicorns', function($scope, Unicorns) {
//   Unicorns.success(function(data) {
//     $scope.UnicornsStuff = data["data"];
//   })
// }])


// .controller('UnicornsCtrl', ['$scope', 'Unicorns', function($scope, Unicorns) {
//   Unicorns.success(function(data) {
//     $scope.UnicornsStuff = data["data"];
//   })
// }])



// .controller('UnicornsCtrl', function($scope, Unicorns) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   $scope.$on('$ionicView.enter', function(e) {
//   });


// })

// .controller('UnicornDetailCtrl', function($scope, $stateParams, Unicorns) {
//   $scope.unicorn = Unicorns.get($stateParams.unicornId);
// })

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
