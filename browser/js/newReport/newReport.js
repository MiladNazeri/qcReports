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

    $scope.newReport.general = {};

    $scope.newReport.video_files = [];
    $scope.newReport.tempvideo_files = {};
    $scope.newReport.tempvideo_files.jobs = {};

    $scope.newReport.after_effects = [];
    $scope.newReport.tempafter_effects = {};
    $scope.newReport.tempafter_effects.jobs = {};

    $scope.newReport.artwork_pack_shots = [];
    $scope.newReport.tempartwork_pack_shots = {};
    $scope.newReport.tempartwork_pack_shots.jobs = {};

    $scope.newReport.audio_files = [];
    $scope.newReport.tempaudio_files = {};
    $scope.newReport.tempaudio_files.jobs = {};

    $scope.newReport.flame = [];
    $scope.newReport.tempflame = {};
    $scope.newReport.tempflame.jobs = {};

    $scope.newReport.nuke_projects = [];
    $scope.newReport.tempnuke_projects = {};
    $scope.newReport.tempnuke_projects.jobs = {};

    $scope.newReport.other = [];
    $scope.newReport.tempother = {};
    $scope.newReport.tempother.jobs = {};

    $scope.newReport.proTools = [];
    $scope.newReport.tempproTools = {};
    $scope.newReport.tempproTools.jobs = {};

    $scope.newReport.three_d = [];
    $scope.newReport.tempthree_d = {};
    $scope.newReport.tempthree_d.jobs = {};

    $scope.addReport = function(){
        for(var key in $scope.newReport.tempvideo_files.jobs){
            $scope.newReport.video_files.push({
                jobNumber: key,
                report: [$scope.newReport.tempvideo_files.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempafter_effects.jobs){
            $scope.newReport.after_effects.push({
                jobNumber: key,
                report: [$scope.newReport.tempafter_effects.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempartwork_pack_shots.jobs){
            $scope.newReport.artwork_pack_shots.push({
                jobNumber: key,
                report: [$scope.newReport.tempartwork_pack_shots.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempaudio_files.jobs){
            $scope.newReport.audio_files.push({
                jobNumber: key,
                report: [$scope.newReport.tempaudio_files.jobs[key]]
            })
        }
        console.log(" $scope.newReport.audio_files",$scope.newReport.audio_files)
        for(var key in $scope.newReport.tempflame.jobs){
            $scope.newReport.flame.push({
                jobNumber: key,
                report: [$scope.newReport.tempflame.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempnuke_projects.jobs){
            $scope.newReport.nuke_projects.push({
                jobNumber: key,
                report: [$scope.newReport.tempnuke_projects.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempother.jobs){
            $scope.newReport.other.push({
                jobNumber: key,
                report: [$scope.newReport.tempother.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempproTools.jobs){
            $scope.newReport.proTools.push({
                jobNumber: key,
                report: [$scope.newReport.tempproTools.jobs[key]]
            })
        }
        for(var key in $scope.newReport.tempthree_d.jobs){
            $scope.newReport.three_d.push({
                jobNumber: key,
                report: [$scope.newReport.tempthree_d.jobs[key]]
            })
        }

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

