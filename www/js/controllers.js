angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, $ionicModal, SearchService) {
  $scope.master = {};
  $scope.searchHasLoaded = false;
  var results = [];

  $scope.update = function(query) {
    $scope.master = angular.copy(query);


    SearchService.GetResults(query).then(function(results){
      $scope.results = results;
      $scope.query = query;
    });

    $scope.searchHasLoaded = true;
  };

  $scope.loadMore = function(query){
    SearchService.GetMoreResults(query).then(function(results) {
        $scope.results = $scope.results.concat(results);
        $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
    $scope.showModal('templates/result-popover.html');
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
