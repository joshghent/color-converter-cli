const RGBColor = require('./RGBColor');
const HexColor = require('./HexColor');
const CMYKColor = require('./CMYKColor');

module.exports = function(color) {
    if(/([A-Z])/ig.test(color) === true) {
        return new HexColor(color);
    } else if (color.split(',').length === 4) {
        return new CMYKColor(color);
    } else if (color.split(',').length === 3) {
        return new RGBColor(color);
    }

    return undefined;
};