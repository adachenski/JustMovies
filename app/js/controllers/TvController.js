/**
 * Created by Administrator on 3/14/2017.
 */
'use strict';

movieApp.controller('TvController',function($scope, tvService){
    $scope.order = {
        value:'top_rated'
    };

    $scope.reloadTv = function(){
        $scope.allShows = tvService.getAllShows($scope.order.value);
        console.log($scope.allShows );
    };

    $scope.allShows = tvService.getAllShows($scope.order.value);
    console.log($scope.allShows );
});