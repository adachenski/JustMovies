/**
 * Created by Administrator on 3/14/2017.
 */
'use strict';

movieApp.controller('TvController', function ($scope, $stateParams, $state, tvService) {

    $scope.order = {
        "type": "select",
        "name": "Service",
        "value": 'on_the_air'
    };
    $scope.allShows = tvService.getShows($scope.order.value, $stateParams.page);
    $scope.singlePage = $stateParams.page;
    //var page = 1;
    $scope.reloadTv = function () {
        $scope.singlePage = 1;
        $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage}, {notify: false});
        $scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
        console.log($scope.allShows);
    };

    $scope.next = function () {
        $scope.singlePage++;
        $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage}, {notify: false});
        $scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
        console.log($state.href('movieApp.tv', $state.params, {absolute: true}));
    };

    console.log($scope.allShows);
});