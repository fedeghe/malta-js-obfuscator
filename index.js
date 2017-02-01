var ob = require('javascript-obfuscator'),
    path = require('path'),
    fs = require('fs');

function obfuscator(obj, options) {
    var self = this,
        start = new Date(),
        msg;
    options = options || {};
    obj.content = ob.obfuscate(obj.content, options);
    return function (solve, reject) {
        fs.writeFile(obj.name, obj.content, function (err) {
            if (err == null) {
                msg = 'plugin ' + path.basename(__filename) + ' wrote ' + obj.name + ' (' + self.getSize(obj.name) + ')';
            } else {
                console.log('[ERROR] js-obfuscator says:');
                console.dir(err);
                self.stop();
            }
            solve(obj);
            self.notifyAndUnlock(start, msg);
        })
    }
}
obfuscator.ext = ['js', 'coffee', 'ts'];
module.exports = obfuscator;