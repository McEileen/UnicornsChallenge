angular.module('starter.services', [])

.factory('UnicornService', function($http){
  var API_URL_CALL = "http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100";
  var unicorns = [];

  return {
          GetUnicorns: function(){
                    return $http.get("http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100").then(function(response){
                      console.log(response);
                      console.log("IN GET UNICORNS");
                      unicorns = response.data.data;
                      console.log(unicorns);
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



// .factory('Unicorns', ['$http', function($http) {
//   return $http.get('http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100')
//             .success(function(data) {
//               return data;
//             })
//             .error(function(err) {
//               console.log("err");
//               return err;
//             });
// }]);