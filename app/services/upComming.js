/**
 * Created by Administrator on 3/13/2017.
 */
/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.factory('upComming', function ($resource) {
    var resource = $resource('https://api.themoviedb.org/3/movie/upcoming?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US&page=1', {'query':  {method:'GET', isArray:true}});

    return resource.get(function (res) {
       // console.log(res)
    });

});