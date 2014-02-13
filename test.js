var BMP085 = require('./index.js');

var sensor = BMP085({address: 0x77,
                     mode: 3,
                     units: 'metric'});

sensor.read(function (err, data) {
  console.log(data);
});
