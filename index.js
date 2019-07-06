var ob = require('javascript-obfuscator'),
    path = require('path'),
    fs = require('fs');

function obfuscator(obj, options) {
    var self = this,
        start = new Date(),
        msg,
        pluginName = path.basename(path.dirname(__filename));
    options = options || {};
    
    return function (solve, reject) {
        try {
            obj.content = ob.obfuscate(obj.content, options).getObfuscatedCode();
            fs.writeFile(obj.name, obj.content, function (err) {
                if (err == null) {
                    msg = 'plugin ' + pluginName.white() + ' wrote ' + obj.name +' (' + self.getSize(obj.name) + ')';
                } else {
                    self.doErr(err, obj, pluginName);
                }
                err
                    ? reject(`Plugin ${pluginName} write error:\n${err}`)
                    : solve(obj);
                self.notifyAndUnlock(start, msg);
            })
        } catch(err) {
            err
                ? reject(`Plugin ${pluginName} minification error:\n${err}`)
                : solve(obj);
            self.notifyAndUnlock(start, msg);
        }
        
    }
}
obfuscator.ext = ['js', 'coffee', 'ts'];
module.exports = obfuscator;