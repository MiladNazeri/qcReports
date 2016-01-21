app.directive('tableFlame', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableFlame.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})