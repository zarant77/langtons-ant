var rgbToHex = function (color) {
  var r = color[0].toString(16);
  var g = color[1].toString(16);
  var b = color[2].toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return '#' + (r + g + b).toLowerCase();

};

var Ant = function (field, x, y) {
  this.step = 0;
  this.size = 2;
  this.field = field;
  this.xPos = x || 0;
  this.yPos = y || 0;
  this.dir = Math.floor(Math.random() * 4);
  this.color = '#000000';
  this.name = '';
};

Ant.prototype.turnLeft = function () {
  if (this.dir == 0) {
    this.dir = 3;
  }
  else {
    this.dir--;
  }
};

Ant.prototype.turnRight = function () {
  if (this.dir == 3) {
    this.dir = 0;
  }
  else {
    this.dir++;
  }
};

Ant.prototype.move = function () {
  var currentPixelColor = rgbToHex(this.field.getImageData(this.xPos, this.yPos, 1, 1).data);
  this.step++;

  if (currentPixelColor == '#ffffff') {
    // На белом квадрате — повернуть на 90° вправо, изменить цвет квадрата на чёрный, сделать шаг вперед на следующую клетку.
    this.turnRight();
    this.field.fillStyle = this.color;
  }
  else {
    // На чёрном квадрате — повернуть на 90° влево, изменить цвет квадрата на белый, сделать шаг вперед на следующую клетку.
    this.turnLeft();
    this.field.fillStyle = '#ffffff';
  }

  this.field.fillRect(this.xPos, this.yPos, this.size, this.size);

  switch (this.dir) {
    case 0: // up
      this.yPos -= this.size;
      break;

    case 1: // right
      this.xPos += this.size;
      break;

    case 2: // down
      this.yPos += this.size;
      break;

    case 3: // left
      this.xPos -= this.size;
      break;
  }
};
