app.directive('tableVideo', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/Tables/tableVideo.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})