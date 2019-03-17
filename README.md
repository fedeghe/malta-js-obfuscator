---
[![npm version](https://badge.fury.io/js/malta-js-obfuscator.svg)](http://badge.fury.io/js/malta-js-obfuscator)
[![Dependencies](https://david-dm.org/fedeghe/malta-js-obfuscator.svg)](https://david-dm.org/fedeghe/malta-js-obfuscator)
[![npm downloads](https://img.shields.io/npm/dt/malta-js-obfuscator.svg)](https://npmjs.org/package/malta-js-obfuscator)
[![npm downloads](https://img.shields.io/npm/dm/malta-js-obfuscator.svg)](https://npmjs.org/package/malta-js-obfuscator)  
---  

This plugin can be used on: **.js** files and even on **.coffee** and **.ts** files after using the right plugin

The options avaialbe are all those available in the [javascript-obfuscator package](https://www.npmjs.com/package/javascript-obfuscator).  
As in every malta plugin, options must be passed as shown in the sample usage below.  

Sample usage:  
```
@ malta app/source/index.js public/js -plugins=malta-js-obfuscator[compact:false,target:'browser']
```
or in the .json file :
```
"app/source/index.js" : "public/js -plugins=malta-js-obfuscator[compact:false,target:'browser']"
```
or in a script : 
``` js
var Malta = require('malta');
Malta.get().check([
    'app/source/index.js',
    'public/js',
    '-plugins=malta-js-obfuscator[compact:false,target:\'browser\']',
    '-options=compact:false'
    ]).start(function (o) {
        var s = this;
        console.log('name : ' + o.name)
        console.log("content : \n" + o.content);
        'plugin' in o && console.log("plugin : " + o.plugin);
        console.log('=========');
    });
```
For more information about the options checkout the [javascript-obfuscator package on npm](https://www.npmjs.com/package/javascript-obfuscator) and the related [herokuapp.com page](https://javascriptobfuscator.herokuapp.com/)
