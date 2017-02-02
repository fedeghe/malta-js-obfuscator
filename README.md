This plugin can be used on: **.js** files and even on **.coffee** and **.ts** files after using the right plugin

Options :
    - compact:
    - controlFlowFlattening
    - controlFlowFlatteningThreshold
    - debugProtection
    - debugProtectionInterval
    - disableConsoleOutput
    - reservedNames
    - rotateStringArray
    - seed
    - selfDefending
    - sourceMap
    - sourceMapBaseUrl
    - sourceMapFileName
    - sourceMapMode
    - stringArray
    - stringArrayEncoding
    - stringArrayThreshold
    - unicodeEscapeSequence

Sample usage:  

    malta app/source/index.js public/js -plugins=malta-js-obfuscator[compact:false]

or in the .json file :

    "app/source/index.js" : "public/js -plugins=malta-js-obfuscator"

or in a script : 

    var Malta = require('malta');
    Malta.get().check([
        'app/source/index.js',
        'public/js',
        '-plugins=malta-js-obfuscator',
        '-options=compact:false'
        ]).start(function (o) {
            var s = this;
            console.log('name : ' + o.name)
            console.log("content : \n" + o.content);
            'plugin' in o && console.log("plugin : " + o.plugin);
            console.log('=========');
        });

For more information about the options checkout the [javascript-obfuscator package on npm](https://www.npmjs.com/package/javascript-obfuscator) and the related [herokuapp.com page](https://javascriptobfuscator.herokuapp.com/)
