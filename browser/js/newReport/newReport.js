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
    $scope.newReport = {};
    $scope.newReport.video_files = {};
    $scope.newReport.video_files.jobs = {};
    $scope.newReport.after_effects = {};
    $scope.newReport.after_effects.jobs = {};
    $scope.newReport.artwork_pack_shots = {};
    $scope.newReport.artwork_pack_shots.jobs = {};
    $scope.newReport.audio_files = {};
    $scope.newReport.audio_files.jobs = {};
    $scope.newReport.flame = {};
    $scope.newReport.flame.jobs = {};
    $scope.newReport.nuke_projects = {};
    $scope.newReport.nuke_projects.jobs = {};
    $scope.newReport.other = {};
    $scope.newReport.other.jobs = {};
    $scope.newReport.proTools = {};
    $scope.newReport.proTools.jobs = {};
    $scope.newReport.three_d = {};
    $scope.newReport.three_d.jobs = {};

    $scope.addReport = function(){
        ReportsFactory.getReport()
    }


    // $scope.newReport.audio_files.full_mix.included = false;




        // .then(function(){
        //     $state.go('home');
        // })


})

// ReportsFactory.createReport($scope.newReport)
//         .then(function(){
//             ReportsFactory.getReport()
//         })
//         .then(function(data){
//             console.log(data);
//         })