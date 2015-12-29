// east: example 1: 37.789048, -122.387229
// north: 2: 37.810917, -122.477343
// - golden gate bridge
// west: 37.751869, -122.510050
// south: 37.624711, -122.380869
// - near the airport

module.exports = function (seed, numRecords) {

  var latOffset = 0.2;

  var longOffset = 0.2;

  var lat, long;

  var result = [];

  for (var i = 0; i < numRecords; i ++) {
    lat = seed[0] - latOffset + Math.random() * latOffset * 2;
    long = seed[1] - longOffset + Math.random() * longOffset * 2;

    latString = lat.toString();
    concatLat = +latString.substring(0, latString.lastIndexOf('.') + 8);

    longString = long.toString();
    concatLong = +longString.substring(0, longString.lastIndexOf('.') + 8);

    result.push([concatLat,concatLong]);
  }
  return result;
  
}








