angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, $state, $stateParams,mySharedService, SearchService) {

  $scope.handleClick = function(msg){
    console.log("in SearchCtrl handleClick, below msg");
    console.log(msg);
    mySharedService.prepForBroadcast(msg);
    $state.go('tab.results');
  }
})

.controller('ResultsCtrl', function($scope, $state, $stateParams, mySharedService, SearchService) {

    $scope.$on('handleBroadcast', function() {
      $scope.message = mySharedService.message;
      console.log("in handleBroadcast, $scope.message below");
      console.log($scope.message);
      console.log("in handleBroadcast, mySharedService.message below");
      console.log(mySharedService.message);
    })

})


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


// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });
