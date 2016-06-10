/**
 * Created by lulaleus on 05/05/2016.
 */
angular.module('moviesCollection',['ngRoute','ui.router'])
  .constant("API_URL",{
    UPCOMING_MOVIES:'data/upcoming-movies.json',
    MOVIE_DETAILS_BASE_URL:"http://www.omdbapi.com/?i=",
    MOVIE_DETAILES_PARAMS:"&plot=full&r=json"
  })
  .config([
    "$routeProvider",
    function ($routeProvider) {

      $routeProvider
          .when('/movies-list', {
            templateUrl: 'templates/movies-list.html',
            controller: 'moviesListCtrl'
          })
          .when('/movie-details/:id', {
            templateUrl: 'templates/movie-details.html',
            controller: 'movieDetailsCtrl'
          })
          .otherwise({
            redirectTo: '/movies-list'
          });
    }
  ]);
//
//function router($routeProvider) {
//
//  $routeProvider
//      .when('/movies-list', {
//        templateUrl: 'templates/movies-list.html',
//        controller: 'moviesListCtrl'
//      })
//      .when('/movie-details/:movie-id', {
//        templateUrl: 'templates/movie-details.html',
//        controller: 'movieDetailsCtrl'
//      })
//      .otherwise({
//        redirectTo: '/movies-list'
//      });
//}
