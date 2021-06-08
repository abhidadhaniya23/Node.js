const { randomFillSync } = require('crypto')
const { readFile, writeFile } = require('fs')

readFile('../content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(`Error: ${error}`)
    }
    else {
        console.log(result)
    }
    const first = result

    readFile('../content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(`Error: ${error}`)
        }
        else {
            console.log(result)
        }
    })
    const second = result

    writeFile('../content/subfolder/result-fileAsync.txt', `Here is your fs-async result: ${first},${second}`, (error, result) => {
        if (error) {
            console.log(`Error: ${error}`)
        }
        else {
            console.log(result)
        }
    })
})