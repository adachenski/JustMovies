/**
 * Created by Administrator on 4/1/2017.
 */
movieApp.controller('PagenationController', function ($state, $scope, $stateParams, movieService, $sce) {
    $scope.singleNumber = $stateParams.page;

    movieService.similarMovies2($stateParams.eventId, $stateParams.similar, '1')
        .$promise
        .then(function (result) {
            $scope.singleSimilar = result;
            console.log(result)

        });

    $scope.next = function () {
        $stateParams.page++;
        $state.go('movieApp.similar', {
            order: $stateParams.eventId,
            similar: $stateParams.similar,
            page: $stateParams.page
        }, {notify: false});
        $scope.singleSimilar = movieService.similarMovies2($stateParams.eventId, $stateParams.similar, $stateParams.page);
    };

    $scope.prev = function () {
        $stateParams.page--;
        if ($stateParams.page <= 1) {
            $stateParams.page = 1;
        } else {
            $scope.singlePage--;
            $state.go('movieApp.similar', {
                order: $stateParams.eventId,
                similar: $stateParams.similar,
                page: $stateParams.page
            }, {notify: false});
            $scope.singleSimilar = movieService.similarMovies2($stateParams.eventId, $stateParams.similar, $stateParams.page);
        }
    };

});