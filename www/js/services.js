angular.module('starter.services', [])

.factory('UnicornService', function($http){
  var API_URL_CALL = "http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100";
  var unicorns = [];

  return {
          GetUnicorns: function(){
                    return $http.get("http://api.giphy.com/v1/gifs/search?q=unicorn+unicorns&api_key=dc6zaTOxFJmzC&fmt=json&limit=100").then(function(response){
                      // console.log("IN GET UNICORNS");
                      // console.log("response below");
                      // console.log(response);
                      unicorns = response.data.data;
                      // console.log("should see all 100 unicorn objects below" )
                      // console.log(unicorns);
                      // console.log("should see url below")
                      // console.log(unicorns[0].images.fixed_height.url);
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