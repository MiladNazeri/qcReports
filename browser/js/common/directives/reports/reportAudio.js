app.directive('reportAudio', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-audio.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.audio_files.jobs[jobNumber] = {};
            $scope.newReport.audio_files.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-audio-job job-number=" + jobNumber + " job='newReport.audio_files.jobs["+jobNumber+"].v001'></report-audio-job>")($scope));
            $scope.newReport.audio_files.job_number="";
            console.log("jobs object", $scope.newReport.audio_files.jobs)
            }
        }
    };
});

app.directive('reportAudioJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportAudioJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});