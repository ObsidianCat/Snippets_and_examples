/**
 * Created by lulaleus on 05/05/2016.
 */
angular.module("moviesCollection").controller("movieDetailsCtrl", [
  "$scope",
  "DataGetter",
  "$routeParams",
  function($scope, DataGetter, $routeParams){
    $scope.movieData = DataGetter.getMovieDetails($routeParams.id).then(function(data) {
      $scope.movieData = data;
    });
  }]);