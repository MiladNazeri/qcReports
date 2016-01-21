app.directive('tableNuke', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableNuke.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})