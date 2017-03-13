/**
 * Created by Administrator on 3/12/2017.
 */

'use strict';

movieApp.directive('movieCell',function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'/views/directives/movieCell.html',
        scope:{
            movie:'=movie'
        }
    }
});