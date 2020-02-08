const fs = require('fs')

const readDirFileName = async (dirPath, options) => {
  const stat = await fs.statSync(dirPath)
  if (!stat.isDirectory()) {
    return dirPath
  }
  const dirs = await fs.readdirSync(dirPath)
    .filter(item => {
      if (options.ignore) {
        return !item.startsWith('.') && item !== options.ignore
      }
      return !item.startsWith('.')
    })
  const ret = await Promise.all(dirs
    .map(async sub => await readDirFileName(`${dirPath}/${sub}`)))
  return [].concat(...ret)
}

module.exports = async (dirPath, options = {}) => {
  const ret = await readDirFileName(dirPath, options)
  if (Array.isArray(ret)) {
    return ret
  }
  return [ret]
}
