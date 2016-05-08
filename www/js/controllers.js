angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, SearchService) {
  $scope.master = {};

  $scope.update = function(query) {
    $scope.master = angular.copy(query);
    console.log("below we can see $scope.master");
    console.log($scope.master);
    var queryForService = $scope.master;
    console.log("queryForService below");
    console.log(queryForService);
    console.log("query below");
    console.log(query);

    SearchService.GetResults().then(function(results){
      $scope.results = results;
      $scope.query = query;
      console.log("below you can see results in SearchService.GetResults");
      console.log(results);
      console.log("below you can see query in SearchService.GetResults");
      console.log(query);
    });

  };



})

// .controller('ResultsCtrl', function($scope, $state, $stateParams, mySharedService, SearchService) {

//     $scope.$on('handleBroadcast', function() {
//       $scope.message = mySharedService.message;
//       console.log("in handleBroadcast, $scope.message below");
//       console.log($scope.message);
//       console.log("in handleBroadcast, mySharedService.message below");
//       console.log(mySharedService.message);
//     })

// })


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
