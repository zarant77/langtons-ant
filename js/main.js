var step = 0,
  ants = [],
  names = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'suspendisse', 'eget', 'leo', 'quis', 'nibh', 'iaculis', 'accumsan', 'non', 'porttitor', 'tortor', 'in', 'convallis', 'ex', 'eu', 'erat', 'tristique', 'pellentesque', 'id', 'viverra', 'aliquet', 'ut', 'mi', 'nullam', 'ornare', 'lacus', 'tempor', 'auctor', 'sollicitudin', 'eros', 'at', 'mauris', 'maecenas', 'vitae', 'lobortis', 'mattis', 'tincidunt', 'orci', 'fusce', 'neque', 'urna', 'nam', 'ultricies', 'feugiat', 'donec', 'nec', 'vel', 'vehicula', 'aenean', 'felis', 'nisl', 'placerat', 'pharetra', 'et', 'rhoncus', 'ligula', 'vestibulum', 'consequat', 'elementum', 'bibendum', 'ullamcorper', 'sed', 'interdum', 'congue', 'varius', 'ac', 'venenatis', 'justo', 'nulla', 'odio', 'vivamus', 'sapien', 'quam', 'duis', 'sodales', 'lectus', 'finibus', 'eleifend', 'enim', 'fringilla', 'diam', 'dui', 'ultrices', 'purus', 'velit', 'malesuada', 'curabitur', 'dapibus', 'risus', 'magna', 'est', 'lacinia', 'praesent', 'pulvinar', 'nisi', 'phasellus', 'blandit', 'aliquam', 'turpis', 'luctus', 'tellus', 'etiam', 'efficitur', 'condimentum', 'cursus', 'facilisis', 'libero', 'dictum', 'euismod', 'pretium', 'cras', 'scelerisque', 'sagittis', 'augue', 'semper', 'ante', 'quisque', 'hendrerit', 'metus', 'proin', 'egestas', 'commodo', 'rutrum', 'dignissim', 'nunc', 'mollis', 'fermentum', 'a', 'faucibus', 'facilisi', 'tempus', 'integer', 'imperdiet', 'suscipit', 'sem', 'volutpat', 'vulputate', 'arcu', 'porta', 'gravida', 'molestie', 'primis', 'posuere', 'cubilia', 'curae;', 'maximus', 'laoreet', 'morbi'];

var getRandomColor = function () {
  var letters = [0, 3, 6, 9, 'b', 'e'];
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

var move = function () {
  if (ants.length) {
    step++;
    document.title = 'Langton\'s ant | Step: ' + step;

    for (var i = 0; i < ants.length; i++) {
      ants[i].move();
    }
  }

  setTimeout(function () {
    move();
  }, 1);
};

var spawnAnt = function (field, x, y) {
  var ant = new Ant(field, x, y);

  ant.dir = Math.floor(Math.random() * 4);
  ant.color = getRandomColor();
  ant.name = names[Math.floor(Math.random() * names.length)] + ' ' + names[Math.floor(Math.random() * names.length)];

  ants.push(ant);
};

$(function () {
  var canvas = $('#canvas'),
    field = canvas[0].getContext('2d');

  field.fillStyle = '#ffffff';
  field.fillRect(0, 0, canvas.width(), canvas.height());

  canvas.on('click', function (evt) {
    spawnAnt(field, evt.offsetX, evt.offsetY);
  });

  move();
});
