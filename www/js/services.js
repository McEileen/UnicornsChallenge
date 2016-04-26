angular.module('starter.services', [])

.factory('Unicorns', ['$http', function($http) {
  return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              console.log("err");
              return err;
            });
}]);