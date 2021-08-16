/* Read File */
/*
const fs = require('fs')

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

fs.stat('test.txt', (err, status) => {
    if (err) {
        console.log(err);
    }
    console.log(status.isFile());
    console.log(status.isDirectory());
    console.log(status.isSymbolicLink());
    console.log(status.size);   // returns in byte
})
*/

/* Write file */
// sync way
/*
const fs =require('fs')

let content=[{
    type:"Node Application"
}]

fs.writeFileSync('writeFile.json',JSON.stringify(content))
*/


/* Write File Async */

const fs = require('fs')

let content=[{
    type:"Node Application"
}]

// w+ to write and override data
// a+ to append data
// a 
// r+ to reading and writing
// to get more idea about all flags : https://nodejs.org/api/fs.html#fs_file_system_flags

fs.writeFile('asyncWrite.txt', JSON.stringify(content), { flag: 'a+' }, err => {
    if (err) {
        console.log(err);
    }
    console.log('Successfully Done!');
})


// delete file

fs.unlink('asyncWrite.txt',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('File Removed');
})