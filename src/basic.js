const fs = require('fs')
const util = require('util')

const init = async () => {
    console.log('Welcome to fs module.')

    fs.open(__filename, 'r', (err, fd) => {
        if (err)
            throw err
        // else
        //getFileStats(fd)
    })

    const directoryPath = '/'
    const childDirectories = await listChildDirectories(directoryPath)
    console.log(`\nListing childs of Directory Path: ${directoryPath}`)

    childDirectories.forEach((val, idx) => {
        if(val.isDirectory()) console.log(`\tDirectory Name: ${val.name}`)
    })
}

const getFileStats = (handle) => {
    fs.fstat(handle, (err, stats) => {
        if (err) console.log(`Encountered error: ${err}`)
        else {
            console.log(stats)

            fs.close(handle, (err) => {
                if (err) throw err
                else console.log(`\nFile closed with fd:{${handle}}.`)
            })
        }
    })
}

const listChildDirectories = async (directoryPath) => {
    const directories = util.promisify(fs.readdir)
    return await directories(directoryPath, {
        withFileTypes: true
    })
}

module.exports = init