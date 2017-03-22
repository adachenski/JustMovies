/**
 * Created by Administrator on 3/21/2017.
 */
'use strict'
movieApp.controller('HeaderController',HeadController);

function HeadController($scope){
    var today =  new Date;
    $scope.today = today;

    $scope.todayDay = today.getDay();

    $scope.week = {
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        7:'Sunday'
    };
};