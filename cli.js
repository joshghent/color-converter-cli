const vorpal = require('vorpal')();
const Color = require('./Colors/ColorFactory');

vorpal
    .delimiter('color-converter-cli$')
    .show();

vorpal
    .command('color-convert [color]')
    .option('-h, --hex')
    .option('-r, --rgb')
    .option('-c, --cmyk')
    .action(function (args, cb) {
        this.log(Color(args.color));
        this.log(args);
        cb();
    });