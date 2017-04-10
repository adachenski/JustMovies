'use strict';

movieApp.controller('MovieHeaderController', function ($scope, $stateParams, movieService) {

    $scope.searchMovie = movieService.search($stateParams.search);

    $scope.searchMovie = function (value) {
        $scope.search = movieService.search(value);
    };
});
