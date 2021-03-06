/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('movieApp', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'views/header.html',
                    controller: 'HeaderController'
                },
                'body-container': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                },
                'footer': {
                    templateUrl: 'views/footer.html'
                }
            }
        })
        .state('movieApp.single', {
            url: 'movies/:eventId',
            views: {
                'header@': {
                    templateUrl: '../views/movieHeader.html',
                    controller:'MovieHeaderController'
                },
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
        .state('movieApp.cast', {
            url: 'movies/:eventId/cast',
            views: {
                'header@': {
                    templateUrl: '../views/movieHeader.html',
                    controller:'MovieHeaderController'
                },
                'body-container@': {
                    templateUrl: 'views/cast.html',
                    controller: 'SingleMovieController'
                }
            }
        })
        .state('movieApp.movies', {
            url: 'movies/:sortOrder/:page',
            params:{
                //sortOrder:{
                //    value:'now_playing'
                //},
                page:{
                    value:'1'
                }
            },
            views: {
                'header@': {
                    templateUrl: '../views/movieHeader.html',
                    controller:'MovieHeaderController'
                },
                'body-container@': {
                    templateUrl: '../views/movie.html',
                    controller: 'MovieController'
                }
            }
        })
        .state('movieApp.similar', {
            url: 'movies/:eventId/:similar/:page',
            views: {
                'header@': {
                    templateUrl: '../views/movieHeader.html',
                    controller:'MovieHeaderController'
                },
                'body-container@': {
                    templateUrl: 'views/similar.html',
                    controller: 'PagenationController'
                }
            }
        })
        .state('movieApp.tvSingle', {
            url: 'tv/:order',
            views: {
                'header@': {
                    templateUrl: '../views/tvHeader.html'
                },
                'body-container@': {
                    templateUrl: 'views/singleTv.html',
                    controller: 'SingleTvController'
                }
            }
        })
        .state('movieApp.tv', {
            url: 'tv/:order/:page',
            params: {
                page: {
                    value: '1'
                }
            },
            views: {
                'header@': {
                    templateUrl: '../views/tvHeader.html'
                },
                'body-container@': {
                    templateUrl: 'views/tv.html',
                    controller: 'TvController'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
