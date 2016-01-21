app.directive('tableOther', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableOther.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})
