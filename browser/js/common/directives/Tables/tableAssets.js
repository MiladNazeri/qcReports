app.directive('tableAssets', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableAssets.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})
