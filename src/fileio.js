

const tryreadstream = async () => {
    const fs = require('fs')
    const util = require('util')

    const fsOpenPromise = util.promisify(fs.open)
    const explicitFd = await fsOpenPromise('./newfile.txt', 'r')

    console.log(`explicit fd: ${explicitFd}`)
    const filestream = fs.createReadStream('./newfile.txt', { autoClose: true, fd: explicitFd })

    filestream.on('open', (fd) => console.log(`file read stream opened. fd: ${fd}`)) // 'open' event is not emitted if a fd value is provided in options for createReadStream()
    filestream.on('data', (chunk) => console.log(`chunk receeived: ${chunk}`))
    filestream.on('close', () => {
        console.log('read stream is closed now.')
    })
}

module.exports = Object.assign({ tryreadstream })


