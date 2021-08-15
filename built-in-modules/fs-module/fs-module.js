// File System Module...

// const fs = require('fs')
// console.log(fs);

// in this fs module there were lot of methods for file system...

const { randomFillSync } = require('crypto');
const { readFileSync, writeFileSync, write, appendFileSync } = require('fs')
// I import those 2 methods for read and write files from system...

// how to access (read or write) them...?

const first = readFileSync('../content/first.txt', 'utf8')
const second = readFileSync('../content/second.txt', 'utf8')
// console.log(first);
// console.log(second);

// now how to use write file sync...
// writeFileSync('./content/result-sync.txt', `here is your result : ${first}, ${second}`);
// if there now file available for write on that name then its will be creating automatically...
// if any data available in that file then node over hide that new data in that file

// if i want to append data in file then...
// i need to pass third parameter something like...

// writeFileSync('./content/result-sync.txt', `here is your result : ${first}, ${second}`, { flag: 'a' });
// meaning of flag:a is append the data in that file...

// if any error when appending data or any kind of that... then use try-catch...
try {
    // writeFileSync('./content/result-sync.txt', `here is your result : ${first}, ${second}`, { flag: 'ad' });
    writeFileSync('../content/result-sync.txt', `here is your result : ${first}, ${second}`, { flag: 'a' });
}
catch (error) {
    console.log('Error : ' + error);
}


// there are also proper method for append data...
// const newLineData='Hello World\n'
// appendFileSync('./content/result-sync.txt',`Appended result is : ${newLineData}`);

console.log('\nEnd of script');