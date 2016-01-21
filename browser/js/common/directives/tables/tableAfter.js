app.directive('tableAfter', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableAfter.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})
