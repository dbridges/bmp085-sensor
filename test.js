var BMP085 = require('./index.js');

var sensor = BMP085();

sensor.calibrate(function (err, data) {
  if(err || !data) {
     throw err;
  }
  console.log(data);
  sensor.read(function (err, data) {
    if(err || !data) {
      throw err;
    }
    console.log(data);
  });
});

