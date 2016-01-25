app.directive('reportArtwork', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-artwork.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.artwork_pack_shots.splice(Search.indexOfJob(jobNumber, $scope.newReport.artwork_pack_shots), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.artwork_pack_shots.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-artwork-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.artwork_pack_shots["+Search.indexOfJob(jobNumber, $scope.newReport.artwork_pack_shots) +"].report[0]' ></report-artwork-job>")($scope));
                $scope.newReport.artwork_pack_shots.job_number="";

            }

            }
        }
    })

app.directive('reportArtworkJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportArtworkJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});