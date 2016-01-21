app.directive('reportAudio', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-audio.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempaudio_files.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-audio-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempaudio_files.jobs["+jobNumber+"]' ></report-audio-job>")($scope));
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
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportAudioJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});