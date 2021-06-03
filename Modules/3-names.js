// local
let secret = 'Super Secret';
// this variable i can access for only this file...

// share
const john = 'john';
const smith = 'smith';
// const abhi = 'abhi'

module.exports = { john, smith };

// In one file I can not exports more than one module...
module.exports = { abhi };
// this is wrong...

console.log(module);
