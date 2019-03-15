const fs = require('fs')
let _file = 'newfile.txt'

const chfilemodToOwnerWriteOnly = () => {
    fs.chmod(_file, 0o200, (err) => {
        if (err) throw err
        console.log('permission changed to WRITE only successfully.')
    })
}

const chfilemodToOwnerAllPermissions = () => {
    fs.chmod(_file, 0o400 | 0o200 | 0o100, (err) => {
        if (err) throw err
        console.log('owner granted all permissions on file.')
    })
}

const readFile = () => {
    fs.readFile(_file, (err, data) => {
        if(err) throw err
        console.log(`Data read from ${_file} => ${data}`)
    })
}

module.exports = Object.assign({ chfilemodToOwnerWriteOnly, chfilemodToOwnerAllPermissions, readFile })
