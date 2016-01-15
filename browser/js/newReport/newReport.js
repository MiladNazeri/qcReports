app.config(function ($stateProvider) {

    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'js/newReport/newReport.html',
        controller: 'NewReportCtrl'
    });
});

app.controller('NewReportCtrl', function ($scope, $state, ReportsFactory) {
    $scope.newReport = {};
    $scope.addReport = function(){
        ReportsFactory.createReport($scope.newReport).then(function(){
            $state.go('home');
        })
    }
})