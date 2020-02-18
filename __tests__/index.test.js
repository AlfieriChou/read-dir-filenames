const path = require('path')
const readDirFileNames = require('..')

describe('test read dir filenames', () => {
  it('test file', done => {
    const filePath = path.resolve(__dirname, '../dir/test.js')
    const ret = readDirFileNames(filePath)
    expect(ret).toEqual([filePath])
    done()
  })

  it('test dir', done => {
    const filePath = path.resolve(__dirname, '../dir/testDir')
    const ret = readDirFileNames(filePath)
    expect(ret).toEqual([`${filePath}/a.js`])
    done()
  })

  it('test options ignore', done => {
    const filePath = path.resolve(__dirname, '../dir/testDir')
    const ret = readDirFileNames(filePath, { ignore: 'a.js' })
    expect(ret).toEqual([])
    done()
  })
})
