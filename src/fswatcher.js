const fs = require('fs')

const watchDirectory = (directoryPath) => {
    const fswatcher = fs.watch(directoryPath, {encoding: 'utf8'}, (eventType, directoryName) => {
        console.log(`\nNew Notification...!`)
        console.log(`\n${directoryName} observed changes: ${eventType}`)
    })

    // fswatcher.on('change', (eventType, directoryName) => {
    //     console.log(`\nNew Notification...!`)
    //     console.log(`\n${directoryName} observed changes: ${eventType}`)
    // })

    fswatcher.on('error', (error) => console.log(`\nAn error occurred while watching the directory: ${directoryPath}. The Watcher is closed.`))

    fswatcher.on('close', () => console.log(`\nStopped watching the directory: ${directoryPath} for changes. Bye Bye!!!`))

    console.log(`\nStarted watching directory: ${directoryPath}`)
    return fswatcher
}

const disposeWatcher = (watcher) => {
    watcher.close()
}

module.exports = Object.create({watchDirectory: watchDirectory, disposeWatcher: disposeWatcher})