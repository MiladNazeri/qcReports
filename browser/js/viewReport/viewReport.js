app.config(function ($stateProvider) {
    $stateProvider
    .state('viewReport', {
        url: '/viewReport/:id',
        templateUrl: 'js/viewReport/viewReport.html',
        controller: 'ViewReportCtrl',
        resolve: {
            report: function (ReportsFactory, $stateParams) {
                return ReportsFactory.getOneReport($stateParams.id);
            }
        }
    });
});

app.controller('ViewReportCtrl', function ($filter,$scope, $state, report) {
    console.log("report", report)
    $scope.report = report

});



