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

.factory('SearchService', function($http) {
  var API_URL = "http://api.giphy.com/v1/gifs/search?q=";
  var API_URL_CALL_FINISH = "&api_key=dc6zaTOxFJmzC&fmt=json&limit=100";
  var results = [];


  return {
          GetResults: function(query){
                    return $http.get(API_URL + query + API_URL_CALL_FINISH).then(function(response){
                    results = response.data.data;
                    return results;
                    });
          },
          GetMoreResults: function(query){
                    return $http.get(API_URL + query + API_URL_CALL_FINISH).then(function(response){
                      results = response.data.results;
                      return results;
                    });
          }
  }
});
