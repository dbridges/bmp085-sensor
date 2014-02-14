# BMP085.js 

Access a [BMP085](http://www.bosch-sensortec.com/en/homepage/products_3/environmental_sensors_1/bmp085_1/bmp085) temperature & barometric pressure sensor from your Raspberry Pi using Node.js.

### Install

```
$ npm install bmp085-sensor
```

### Usage

With no units specified, returns inHg and degree F.
```javascript
var bmp085 = require('bmp085-sensor');

var sensor = bmp085({address: 0x77,
                     mode: 3});

sensor.read(function (err, data) {
  // data is { pressure: 29.957463223223005, temp: 68.9 }
});

```

You can also specify metric units, returning Pa and degree C:

```javascript
var bmp085 = require('bmp085-sensor');

var sensor = bmp085({address: 0x77,
                     mode: 3,
                     units: 'metric'});

sensor.read(function (err, data) {
  // data is { pressure: 101435.97, temp: 20.5 }
});

```
