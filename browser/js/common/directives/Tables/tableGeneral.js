app.directive('tableGeneral', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableGeneral.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})