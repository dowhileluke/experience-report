
var app = angular.module('ExperienceApp', ['experience-directives', 'experience-locations']);

app.config(['$logProvider', function ($logProvider) {
  $logProvider.debugEnabled(false);
}]);

app.run(['$log','$rootScope', 'locations', function ($log, $rootScope, locations) {
  $log.debug('app loaded');

  $rootScope.locations = locations.all;
}]);

