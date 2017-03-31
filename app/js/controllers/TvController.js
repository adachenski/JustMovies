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

    $scope.reloadTv = function () {
        $scope.singlePage = 1;
        $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage}, {notify: false});
        $scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
    };

    $scope.next = function () {
        $scope.singlePage++;
        $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage}, {notify: false});
        $scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
    };

    $scope.prev = function () {
        if($scope.singlePage === 1){
            $scope.singlePage=1;
        }
        else{
            $scope.singlePage--;
            $state.go('movieApp.tv', {order: $scope.order.value, page: $scope.singlePage}, {notify: false});
            $scope.allShows = tvService.getShows($scope.order.value, $scope.singlePage);
        }
    };

});