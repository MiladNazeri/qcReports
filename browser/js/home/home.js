app.config(function ($stateProvider) {
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
            reports: function (ReportsFactory) {
                return ReportsFactory.getAllReports();
            }
        }
    });
});

app.controller('HomeCtrl', function ($scope, $state, reports) {
    $scope.reports = reports;
});