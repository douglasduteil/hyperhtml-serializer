//

test('should remove extra hyper comments from the html', () => {
  const actual = require('fs')
    .readFileSync(__dirname + '/actual.html')
    .toString();
  const section = document.createElement('section');
  section.innerHTML = actual;
});

test('should only act on HTML strings', () => {
});
