// const app = require('./src/basic')
// app()

// const fsWatcherModule = require('./src/fswatcher')
// const watcherObj = fsWatcherModule.watchDirectory('/users/deepak')
// setTimeout(() => fsWatcherModule.disposeWatcher(watcherObj), 30000)


// const generatePassword = async () => {
//     const bcryptLib = require("bcrypt")
//     const hashedPassword = await bcryptLib.hash("PASSWORD", 10)
//     console.log(`Hashed Password: ${hashedPassword}`)
// }
// generatePassword()

// const fsapi = require('./src/basic2')
// fsapi.displayFilesInDir(`${__dirname}/src/`)
// fsapi.readFile(`${__dirname}/src/basic2.js`)

// const fs = require('fs')
// const basic3 = require('./src/basic3')
//basic3.checkFileDirAccess('package.json', fs.constants.R_OK)

//basic3.appendDataToFile1('newfile.txt', '\nHello Node1')
//basic3.appendDataToFile2('newfile2.txt', '\nHello Node2')
(async () => {
    // const chmod = require('./src/chmod')
    // await chmod.chfilemodToOwnerWriteOnly()

    // try {
    //     //await chmod.readFile() // would result in failure, as we stripped down permissiom to 'write' only for owner.
    // }
    // catch (e) { }

    // await chmod.chfilemodToOwnerAllPermissions(chmod.readFile)

    // const cp = require('./src/copyfile')
    // cp.cpFile()

    const fileio = require('./src/fileio')
    await fileio.tryreadstream()

})()


