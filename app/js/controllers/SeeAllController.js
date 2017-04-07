/**
 * Created by Administrator on 4/1/2017.
 */
movieApp.controller('PagenationController', function ($state, $scope, $stateParams, movieService) {
    $scope.singleNumber = $stateParams.page;

    movieService.similarMovies2($stateParams.eventId, $stateParams.similar, '1')
        .$promise
        .then(function (result) {
            $scope.singleSimilar = result;
        });

    $scope.next = function () {
        $scope.singleNumber++;
        $state.go('movieApp.similar', {
            order: $stateParams.eventId,
            similar: $stateParams.similar,
            page: $scope.singleNumber
        }, {notify: false});
        $scope.singleSimilar = movieService.similarMovies2($stateParams.eventId, $stateParams.similar, $scope.singleNumber);
    };

    $scope.prev = function () {
        $scope.singleNumber--;
        if ($stateParams.page <= 1) {
            $stateParams.page = 1;
        } else {
            $scope.singlePage--;
            $state.go('movieApp.similar', {
                order: $stateParams.eventId,
                similar: $stateParams.similar,
                page: $scope.singleNumber
            }, {notify: false});
            $scope.singleSimilar = movieService.similarMovies2($stateParams.eventId, $stateParams.similar, $scope.singleNumber);
        }
    };

});