// const app = require('./src/basic')
// app()

const fsWatcherModule = require('./src/fswatcher')
const watcherObj = fsWatcherModule.watchDirectory('/users/deepak')
setTimeout(() => fsWatcherModule.disposeWatcher(watcherObj), 30000)