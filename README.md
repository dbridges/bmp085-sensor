# BMP085.js 

Access a [BMP085](http://www.bosch-sensortec.com/en/homepage/products_3/environmental_sensors_1/bmp085_1/bmp085) temperature & barometric pressure sensor from your Raspberry Pi using Node.js.

### Install

```
$ npm install bmp085-sensor
```

### Usage

```javascript
var bmp085 = require('bmp085-sensor');

var sensor = bmp085({address: 0x77,
                     mode: 3});

sensor.read(function (err, data) {
  // data is { pressure: 29.957463223223005, temp: 68.9 }
});

```
