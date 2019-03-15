

const fs = require('fs')

const fsReadDirApi = {

    displayFilesInDir: (dirname) => {
        fs.readdir(dirname, (err, files) => {
            if (err) console.log(`Ooopssss!!!! => ${err}`)
            else
                files.forEach(file => console.log(file))

        })
    },

    readFile: (filepath) => {
        fs.open(filepath, 'r', (err, fd) => {
            if (err) console.log(`Oooppsss Error: ${err}`)
            else {
                fs.fstat(fd, (err, stats) => {
                    if (err) console.log(`fstats error: ${err}`)
                    else {
                        console.log(JSON.stringify(stats))
                        fs.close(fd, err => { if (err) console.log(err) })
                    }
                })
            }
        })
    }

}

module.exports = fsReadDirApi