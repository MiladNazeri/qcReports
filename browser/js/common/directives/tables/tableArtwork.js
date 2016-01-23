app.directive('tableArtwork', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/tables/tableArtwork.html',
        scope: {
            report: '='
        },
        link: function($scope, element, attrs, controller){

        }
    }
})
