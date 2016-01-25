app.config(function ($stateProvider) {

    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'js/newReport/newReport.html',
        controller: 'NewReportCtrl'
    });
});

app.controller('NewReportCtrl', function ($scope, $state, ReportsFactory, COUNTRIES) {
    console.log(COUNTRIES)
    $scope.countries = COUNTRIES.COUNTRIES;
    $scope.newReport = {}
    $scope.tabs = [];

    $scope.newReport.general = {};
    $scope.newReport.video_files = [];
    $scope.newReport.after_effects = [];
    $scope.newReport.artwork_pack_shots = [];
    $scope.newReport.audio_files = [];
    $scope.newReport.flame = [];
    $scope.newReport.nuke_projects = [];
    $scope.newReport.other = [];
    $scope.newReport.proTools = [];
    $scope.newReport.three_d = [];

    $scope.addReport = function(){
        ReportsFactory.createReport($scope.newReport)
                .then(function(){
                    ReportsFactory.getReport()
                })
                .then(function(data){
                    console.log(data);
                })
                .then(function(){
                    $state.go('home');
                })

    }

})

