/**
 * Created by Administrator on 3/10/2017.
 */

var movieApp = angular.module('movieApp',['ui.router','ngResource','angular-parallax']);

//movieApp.run(function($rootScope, $log){
//
//    $rootScope.$on('$stateChangeSuccess', function(event, toState,toParams, fromState, fromParams){
//        $log.debug('State Changed Succuesfuly')
//        $log.debug('Event ',event);
//        $log.debug('To State  ',toState);
//        $log.debug('To Params ',toParams);
//        $log.debug('FromS tate ',fromState);
//        $log.debug('From Params ',fromParams);
//    })
//});