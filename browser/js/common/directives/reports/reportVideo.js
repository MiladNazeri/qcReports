app.directive('reportVideo', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-video.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.video_files.splice(Search.indexOfJob(jobNumber, $scope.newReport.video_files), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.video_files.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-video-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.video_files["+Search.indexOfJob(jobNumber, $scope.newReport.video_files) +"].report[0]' ></report-video-job>")($scope));
                $scope.newReport.video_files.job_number="";
            }


        }
    };
});

app.directive('reportVideoJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportVideoJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});











































































































