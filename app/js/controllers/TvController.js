/**
 * Created by Administrator on 3/14/2017.
 */
'use strict';

movieApp.controller('TvController', function ($scope, $stateParams, $state, tvService) {

    $scope.order = {
        "type": "select",
        "name": "Service",
        "value": '#'
    };

    $scope.allShows = tvService.getShows($stateParams.order, $stateParams.page);

    $scope.singlePage = $stateParams.page;
    $scope.singleName = $stateParams.order;

    $scope.reloadTv = function () {
        $scope.singlePage = 1;
        $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage});//, {notify: false});
        //$scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
    };

    $scope.next = function () {
        $scope.singlePage++;
        $state.go('movieApp.tv', {order: $stateParams.order, page: $scope.singlePage}, {notify: false});
        $scope.allShows = tvService.getShows($stateParams.order, $scope.singlePage);
    };

    $scope.prev = function () {
        if($scope.singlePage <= 1){
            $scope.singlePage=1;
        }
        else{
            $scope.singlePage--;
            $state.go('movieApp.tv', {order: $stateParams.order, page: $scope.singlePage}, {notify: false});
            $scope.allShows = tvService.getShows($stateParams.order, $scope.singlePage);
        }
    };

});