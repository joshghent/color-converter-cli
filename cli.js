const vorpal = require('vorpal')();
const color = require('./Colors/ColorFactory');

vorpal
    .delimiter('color-converter-cli$')
    .show();

vorpal
    .command('color-convert [color]')
    .option('-h, --hex', 'Converts the color passed to Hexidecimal')
    .option('-r, --rgb', 'Converts the color passed to RGB')
    .option('-c, --cmyk', 'Converts the color passed to CMYK')
    .action(function (args, cb) {
        this.log(color(args.color));
        this.log(args);
        cb();
    });