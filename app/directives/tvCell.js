/**
 * Created by Administrator on 3/14/2017.
 */
movieApp.directive('tvCell',function(){
    return{
        restrict:'AE',
        replace:true,
        templateUrl:'/views/directives/tvCell.html',
        scope:{
            tv:'=tv'
        }
    }
});