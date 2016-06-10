/**
 * Created by lulaleus on 05/05/2016.
 */
angular.module("moviesCollection").controller("moviesListCtrl", [
  "$scope",
  "DataGetter",
  "$filter",
  function($scope, DataGetter,$filter){
    $scope.moviesList = DataGetter.getUpcomingMovies().then(function(data) {
      $scope.moviesListCopy = data;
      $scope.moviesList = data;
      $scope.filterByYear(true);

      $scope.$watch('search', function(val)
      {
        if(val == ""){
          $scope.moviesList = doSort($scope.moviesListCopy, sortOrder);
        }
        else{
          $scope.moviesList = searchBy($scope.moviesListCopy, val);
        }
      });

    });

    var orderBy = $filter('orderBy');
    var searchBy = $filter('filter');
    var sortOrder;
    $scope.filterByYear = function (isReverseOrder){
      if(sortOrder == isReverseOrder){
        return;
      }
      else{
        $scope.moviesList = doSort($scope.moviesList, isReverseOrder);

      }
    };

    function doSort(dataToSort, order){
      dataToSort = orderBy(dataToSort, "Year", order);
      sortOrder = order;
      return dataToSort;
    }


  }]);