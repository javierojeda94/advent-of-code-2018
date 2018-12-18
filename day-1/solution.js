file = require('fs').readFileSync('input');
changes = file.toString().split('\n')
total_frequency = changes.reduce((freq, change) => {
  return +freq + +change
})
console.log(total_frequency);
