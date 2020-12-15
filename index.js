const fs = require('fs')

const readDirFileName = (dirPath, options = {}) => {
  const stat = fs.statSync(dirPath)
  if (!stat.isDirectory()) {
    return dirPath
  }
  const dirs = fs.readdirSync(dirPath)
    .filter(item => {
      if (options.ignore) {
        return !item.startsWith('.') && item !== options.ignore
      }
      return !item.startsWith('.')
    })
  return [].concat(...dirs.map( sub => readDirFileName(`${dirPath}/${sub}`)))
}

module.exports = (dirPath, options) => {
  const ret = readDirFileName(dirPath, options || {})
  if (Array.isArray(ret)) {
    return ret
  }
  return [ret]
}
