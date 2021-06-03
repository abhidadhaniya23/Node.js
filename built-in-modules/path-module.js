const path = require('path')
console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'file.txt')
console.log(filePath)

const baseName = path.basename(filePath)
console.log(baseName)

let absolute=path.resolve(__dirname)
console.log(absolute)
absolute=path.resolve(__filename)
console.log(absolute)
absolute=path.resolve(__dirname,'content','subfolder','file.txt')
console.log(absolute)