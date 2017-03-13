/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
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
            url: 'now-playing',
            views: {
                'body-container@': {
                    templateUrl: 'views/nowPlaying.html',
                    controller: 'NowPlayingController'
                }
            }
        });

    $locationProvider.html5Mode(true);
});
