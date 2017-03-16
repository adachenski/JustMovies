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
        .state('movieApp.movies', {
            url: 'movies',
            views: {
                'body-container@': {
                    templateUrl: '../views/movie.html',
                    controller: 'MovieController'
                }
            }
        }).state('movieApp.single',{
            url: 'movies/:eventId',
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
        })
        .state('movieApp.tv',{
            url:'tv',
            views:{
                'body-container@':{
                    templateUrl:'views/tv.html',
                    controller:'TvController'
                }
            }
        })
        .state('movieApp.tvSingle',{
            url:'tv/:eventId',
            views:{
                'body-container@':{
                    templateUrl:'views/singleTv.html',
                    controller:'SingleTvController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
