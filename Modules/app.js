// Modules
// Node uses commonJS Library...
// Every File in node is module (by default)
// Modules => Encapsulated code (only share minimum)

const name = require('./3-names.js');
console.log(name)

const sayHi = require('./1-utils.js');

sayHi(name.john)
sayHi(name.smith)
sayHi('Abhi')


// if I want to use other functions or variables from other .js files...
// then, I have to use Modules...