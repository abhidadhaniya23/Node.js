// Globals => No Window !!!

// __dirname - path to current directory
// __filename - file name
// reqiure - function to use modules (commonJs)
// module - info about current module (file)
// process - info about environment when program is being executed...

console.log(__dirname);

setInterval(() => {
    console.log('Hello world');
    // press [ctrl + c] to executing from this interval in terminal...
}, 1000);