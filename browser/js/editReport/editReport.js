app.config(function ($stateProvider) {
    $stateProvider
    .state('editReport', {
        url: '/editReport/:id',
        templateUrl: 'js/editReport/editReport.html',
        controller: 'EditReportCtrl',
        resolve: {
            report: function (ReportsFactory, $stateParams) {
                return ReportsFactory.getOneReport($stateParams.id);
            }
        }
    });
});

app.controller('EditReportCtrl', function ($filter,$scope, $state, COUNTRIES, report) {
    console.log(COUNTRIES);
    $scope.countries = COUNTRIES.COUNTRIES;
    console.log("report", report);
    $scope.report = report;


});



