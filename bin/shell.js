const shell = require('shelljs')

const currentFiles = shell.ls('./')

module.exports = {
  create: () => {
    if (!currentFiles.includes('dir')) {
      shell.mkdir('-p', './dir')
      shell.touch('./dir/test.js')
      shell.mkdir('-p', './dir/testDir')
      shell.touch('./dir/testDir/a.js')
    }
  },
  clear: () => {
    if (currentFiles.includes('dir')) {
      shell.rm('-rf', './dir')
    }    
  }
}
