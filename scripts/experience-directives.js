
'use strict';

var app = angular.module('experience-directives', ['ui.bootstrap']);

app.controller('MapModalCtrl', ['$log', '$scope', 'info', function ($log, $scope, info) {
  $scope.info = info;
}]);

app.directive('map', ['$log', '$modal', function ($log, $modal) {
  return {
    restrict: 'E',
    scope: {
      points: '='
    },
    replace: true,
    transclude: false,
    template: '<div class="map">' +
                '<point ng-repeat="p in points" info="p" ng-click="showModal(p)"></point>' +
              '</div>',
    controller: function ($scope) {},
    link: function (scope, elem, attrs) {
      scope.showModal = function (point) {
        $modal.open({
          templateUrl: 'partials/modal.html',
          controller: 'MapModalCtrl',
          resolve: {
            info: function () {
              return point.details;
            },
          },
          size: 'lg',
        });
      };
    },
  };
}]);

app.directive('point', ['$log', function ($log) {
  return {
    restrict: 'E',
    require: '^map',
    scope: {
      info: '='
    },
    transclude: false,
    template: '<div class="point" tooltip="{{info.name}}"></div>',
    controller: function ($scope) {},
    link: function (scope, elem, attrs) {
      elem.css({
        top:  (scope.info.y - 8) + 'px',
        left: (scope.info.x - 8) + 'px'
      });
    },
  };
}]);

app.directive('gallery', ['$log', function ($log) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      src: '=',
      path: '@',
    },
    templateUrl: 'partials/gallery.html',
    link: function (scope, element, attrs) {
      scope.selectedUrl = scope.src && scope.src[0];

      scope.enlarge = function (url) {
        scope.selectedUrl = url;
      };
    }
  };
}]);
