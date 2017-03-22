/**
 * Created by Administrator on 3/21/2017.
 */
movieApp.directive('affix', ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        link: function($scope, $element, $attrs) {

            function applyAffix() {
                $timeout(function() {
                    $element.affix({ offset: { top: $attrs.affix } });
                });
            }

            $rootScope.$on('$stateChangeSuccess', function() {
                $element.removeData('bs.affix').removeClass('affix affix-top affix-bottom');
                applyAffix();
            });

            applyAffix();

        }
    };
}]);