var BMP085 = require('bmp085-sensor');

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

