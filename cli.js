function getColorType(color) {
  if(/([A-Z])/ig.test(color) === true) {
    return 'hex';
  } else if (color.split(',').length === 4) {
    return 'cmyk';
  } else if (color.split(',').length === 3) {
    return 'rgb';
  } else {
    return false;
  }
}

class Color {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
}
