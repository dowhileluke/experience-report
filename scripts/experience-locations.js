
angular.module('experience-locations', ['experience-details']).
  factory('locations', ['$log', 'details', function ($log, details) {
    var exports = {
      all: [],
      find: {}
    };

    function plot(name, x, y) {
      var loc = {
        name: name,
        x: x,
        y: y
      };

      var info = details.find[name];

      if (info) {
        loc.details = info;
        info.plotted = true;
      } else {
        $log.warn('No details found for [' + name + ']');
      };

      exports.all.push(loc);
      exports.find[name] = loc;
    };

    // add locations to plot below //
    plot('Introduction', 877, 62);
    plot('Saint Pancras', 480, 280);
    plot('King\'s Cross', 489, 294);
    plot('Barbican', 527, 321);
    plot('Baker Street', 385, 298);
    plot('Russell Square', 474, 327);
    plot('Blackfriars',486, 404);
    plot('Embankment', 447, 428);
    plot('Farringdon', 513, 307);
    plot('Aldgate', 597, 372);
    plot('Terminals 1, 2, 3', 58, 493);
    plot('Terminal 4', 71, 500);
    plot('Covent Garden', 459, 364);
    plot('Ruislip Manor', 124, 166);
    plot('Piccadilly Circus', 417, 385);
    plot('Regent\'s Park', 393, 323);
    plot('Acknowledgements', 41, 670);
    // add locations to plot above //

    angular.forEach(details.all, function (detail) {
      if (!detail.plotted) {
        $log.warn('No location found for [' + detail.name + ']');
      };
    });

    return exports;
  }]);
