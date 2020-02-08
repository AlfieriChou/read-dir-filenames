const fs = require('fs')

const readDirFileName = async (dirPath, options = {}) => {
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
  return Promise.all(dirs
    .map(async sub => await readDirFileName(`${dirPath}/${sub}`)))
}

module.exports = readDirFileName
