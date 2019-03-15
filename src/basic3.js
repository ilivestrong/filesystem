const fs = require("fs")


const readDirFn = () =>
  fs.readdir(__dirname, { withFileTypes: true }, (err, direntObj) => {

    direntObj.forEach((val) => {
      console.log(`Dirent name: ${val.name}, IsFile: ${val.isFile()}`)
    })
  })

const dofstats = () => {
  fs.open(__filename, 'r', (err, fd) => {
    if (err) throw err
    fs.fstat(fd, (err, statCollection) => {
      if (err) throw err

      console.log(`file stats: ${JSON.stringify(statCollection)}`)
    })
  })
}

const readstreamFn = (filename) => {
  const readstreamObj = fs.createReadStream(filename, { encoding: 'UTF-8' })
  readstreamObj.on('data', (chunk) => {
    console.log(chunk)
    console.log(`BYTES READ: ${readstreamObj.bytesRead}`)
  })

  readstreamObj.on('close', () => console.log('---- >>>> file closed.'))
}

const checkFileDirAccess = (path, permission) => {
  fs.access(path, fs.constants.W_OK, (err) => {
    if (err) throw new Error(`You do not have permission for: ${path}`)

    console.log(`You have permission to access : ${path}`)

  })
}


const appendDataToFile1 = (filePath, data) => {
  fs.appendFile(filePath, data, (err) => {
    if (err) throw err
    console.log(`data: ${data} written to: ${filePath} successfully.`)
  })
}

const appendDataToFile2 = (filePath, data) => {
  fs.open(filePath, 'a', (err, fd) => {

    if (err) throw err

    fs.appendFile(fd, data, (err) => {
      if (err) throw err
      console.log(`data: ${data} written to: ${filePath} successfully.`)

      fs.close(fd, (err) => {
        if (err) throw err
      })

    })

  })
}

module.exports = Object.assign({ readDirFn, dofstats, readstreamFn, checkFileDirAccess, appendDataToFile1, appendDataToFile2 })
