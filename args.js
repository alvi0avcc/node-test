// node args -m Hello

var parseArgs = require('minimist');
// $ node example/parse.js -a beep -b boop
// { _: [], a: 'beep', b: 'boop' }

var argv = require('minimist')(process.argv.slice(2));
console.log("argv (-m)="+argv.m);


const flagIndex = process.argv.indexOf("-m");
if (flagIndex !== -1) {
  const message = process.argv[flagIndex + 1];
  console.log("message="+message);
}

