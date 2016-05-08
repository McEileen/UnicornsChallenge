angular.module('starter.controllers', [])

.controller('SearchCtrl', function($scope, SearchService) {
  $scope.master = {};
  $scope.searchHasLoaded = false;
  var results = [];

  $scope.update = function(query) {
    $scope.master = angular.copy(query);
    console.log("query below");
    console.log(query);

    SearchService.GetResults(query).then(function(results){
      $scope.results = results;
      $scope.query = query;
      console.log(results);
    });

    $scope.searchHasLoaded = true;
  };

    $scope.loadMore = function(query){
      console.log("inside loadMore, searchHasLoaded below");
      console.log($scope.searchHasLoaded);
      SearchService.GetMoreResults(query).then(function(results) {
          console.log("QUERY INSIDE GETMORERESULTS");
          console.log(query);
          $scope.results = $scope.results.concat(results);
          $scope.$broadcast('scroll.infiniteScrollComplete');
      });
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
