
const cpFile = () => {

    const fs = require('fs')

    fs.copyFile('./newfile.txt', './src/copy/newfile_copy.txt',
        (err) => {
            if (err) throw err
        })
}

module.exports = Object.assign({ cpFile })