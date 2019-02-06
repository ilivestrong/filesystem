const fs = require('fs')

const init = () => {
    // write your awesome code here...
    console.log('Welcome to fs module.')

    fs.open(__filename, 'r', (err, fd) => {
        if (err) throw err
        else getFileStats(fd)
    })
}

const getFileStats = (handle) => {
    fs.fstat(handle, (err, stats) => {
        if (err) console.log(`Encountered error: ${err}`)
        else {
            console.log(stats)
            fs.close(handle, (err) => {
                if (err) throw err
                else console.log(`\nStatistics printed, handle:{${handle}} closed.`)
            })
        }
    })
}
module.exports = init