app.directive('reportAudio', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-audio.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.audio_files.splice(Search.indexOfJob(jobNumber, $scope.newReport.audio_files), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.audio_files.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-audio-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.audio_files["+Search.indexOfJob(jobNumber, $scope.newReport.audio_files) +"].report[0]' ></report-audio-job>")($scope));
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