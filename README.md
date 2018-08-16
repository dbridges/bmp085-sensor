# BMP085.js 

Access a [BMP085](http://www.bosch-sensortec.com/en/homepage/products_3/environmental_sensors_1/bmp085_1/bmp085) temperature & barometric pressure sensor from your Raspberry Pi using Node.js.


[![NPM](https://nodei.co/npm/bmp085-sensor.png)](https://npmjs.org/package/bmp085-sensor)

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

sensor.calibrate(function (err, data) {                                                                                                                                                                                                                                        
  if(err || !data) {                                                                                                                                                                                                                                                           
     throw err;                                                                                                                                                                                                                                                                
  }                                                                                                                                                                                                                                                                            
  console.log(data);                                                                                                                                                                                                                                                           
  sensor.read(function (err, data) {                                                                                                                                                                                                                                           
    if(err || !data) {                                                                                                                                                                                                                                                         
      throw err;                                                                                                                                                                                                                                                               
    }                                                                                                                                                                                                                                                                          
    // data is { pressure: 29.957463223223005, temp: 68.9 }
  });                                                                                                                                                                                                                                                                          
});

```

You can also specify metric units, returning Pa and degree C:

```javascript
var bmp085 = require('bmp085-sensor');

var sensor = bmp085({address: 0x77,
                     mode: 3,
                     units: 'metric'});

sensor.calibrate(function (err, data) {                                                                                                                                                                                                                                        
  if(err || !data) {                                                                                                                                                                                                                                                           
     throw err;                                                                                                                                                                                                                                                                
  }                                                                                                                                                                                                                                                                            
  console.log(data);                                                                                                                                                                                                                                                           
  sensor.read(function (err, data) {                                                                                                                                                                                                                                           
    if(err || !data) {                                                                                                                                                                                                                                                         
      throw err;                                                                                                                                                                                                                                                               
    }                                                                                                                                                                                                                                                                          
    // data is { pressure: 101435.97, temp: 20.5 }
  });                                                                                                                                                                                                                                                                          
});
```

### Resources

* https://www.npmjs.com/package/bmp085-sensor
* https://github.com/dbridges/bmp085-sensor
* https://www.openhub.net/p/bmp085-sensor
