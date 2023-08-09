const {readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    const firstText = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
    const secondText = result;
    // writeFile('/content/result-async.txt', `Here is the async result: ${firstText}, ${secondText}`, /*the rest*/, {flag: 'a'}) // for appending
    writeFile('./content/result-async.txt', `Here is the async result: ${firstText}, ${secondText}`, (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        // console.log(result)
        console.log('done with this task')
    })
})
})
console.log('starting next task')