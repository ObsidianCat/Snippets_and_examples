/**
 * Created by lulaleus on 05/05/2016.
 */
angular.module("moviesCollection").factory("DataGetter", [
    "$http",
    "API_URL",
    "$q",
    function($http, API_URL,$q){
      return {
          getUpcomingMovies: function() {
              var defer = $q.defer();
              $http.get(API_URL.UPCOMING_MOVIES, {cache: 'true'})
                  .success(function (data) {
                      defer.resolve(data);
                  });
              return defer.promise;
          },
          getMovieDetails:function(movieId){
            var defer = $q.defer();
              $http.get(API_URL.MOVIE_DETAILS_BASE_URL+movieId+API_URL.MOVIE_DETAILES_PARAMS, {cache: 'true'})
                  .success(function (data) {
                      defer.resolve(data);
                  });
              return defer.promise;
        }
      };//end of return
    }
  ]);