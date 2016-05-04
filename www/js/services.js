angular.module('starter.services', [])

.factory('UnicornService', function($http){
  var API_URL_CALL = "http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100";
  var unicorns = [];

  return {
          GetUnicorns: function(){
                    return $http.get("http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100").then(function(response){
                      unicorns = response.data.data;
                      return unicorns;
                    });
          },
          GetMoreUnicorns: function(){
                    return $http.get(API_URL_CALL).then(function(response){
                      unicorns = response.data.results;
                      return unicorns;
                    });
          }
  }
})

.factory('SearchService', function($rootScope) {
  query = {};
  // query.entry = '';
  return query;
});