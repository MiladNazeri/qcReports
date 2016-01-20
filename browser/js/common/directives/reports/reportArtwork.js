app.directive('reportArtwork', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-artwork.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.artwork_pack_shots.jobs[jobNumber] = {};
            $scope.newReport.artwork_pack_shots.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-artwork-job job-number=" + jobNumber + " job='newReport.artwork_pack_shots.jobs["+jobNumber+"].v001'></report-artwork-job>")($scope));
            $scope.newReport.artwork_pack_shots.job_number="";
            console.log("jobs object", $scope.newReport.artwork_pack_shots.jobs)
            }
        }
    };
});

app.directive('reportArtworkJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportArtworkJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});