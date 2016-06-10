/**
 * Created by Lula on 5/6/2016.
 */
angular.module("moviesCollection").directive('listItem', [
    function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/list-item.html'
    };
}]);