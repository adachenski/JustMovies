/**
 * Created by Administrator on 3/14/2017.
 */
'use strict';

movieApp.controller('TvController',function($scope, tvService){
    $scope.order = {
        value:'on_the_air'
    };

    $scope.reloadTv = function(){
        $scope.allShows = tvService.getShow($scope.order.value);
        console.log($scope.allShows );
    };

    $scope.allShows = tvService.getShow($scope.order.value);
    console.log($scope.allShows );
});