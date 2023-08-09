const path = require('path')
// prints the specific platfroms' seperator (for files only?)
// console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const baseFile = path.basename(filePath)
console.log(baseFile)

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)