/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('movieApp', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html'
                },
                'body-container': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                }
            }
        })
        .state('movieApp.now', {
            url: 'all-movies',
            views: {
                'body-container@': {
                    templateUrl: 'views/nowPlaying.html',
                    controller: 'NowPlayingController'
                }
            }
        }).state('movieApp.single',{
            url: 'now-playing/:eventId',
            views: {
                'body-container@': {
                    templateUrl: 'views/singleMovie.html',
                    controller: 'SingleMovieController'
                }
            }
            //resolve:{
            //    getMovie:'getMovie',
            //    customer:function(getMovie, $stateParams){
            //        var eventId = $stateParams.eventId;
            //        return getMovie.get({eventId:eventId}).$promise;
            //    }
            //}
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
