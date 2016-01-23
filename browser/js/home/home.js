app.config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
            reports: function (ReportsFactory) {
                return ReportsFactory.getReportsObj();
            }
        }
    });
});

app.controller('HomeCtrl', function ($filter,$scope, $state, reports) {
    $scope.reports = reports
});