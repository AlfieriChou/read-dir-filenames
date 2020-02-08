const path = require('path')
const readDirFileNames = require('..')

describe('test read dir filenames', () => {
  it('test file', async done => {
    const filePath = path.resolve(__dirname, '../dir/test.js')
    const ret = await readDirFileNames(filePath)
    expect(ret).toEqual([filePath])
    done()
  })

  it('test dir', async done => {
    const filePath = path.resolve(__dirname, '../dir/testDir')
    const ret = await readDirFileNames(filePath)
    expect(ret).toEqual([`${filePath}/a.js`])
    done()
  })

  it('test options ignore', async done => {
    const filePath = path.resolve(__dirname, '../dir/testDir')
    const ret = await readDirFileNames(filePath, { ignore: 'a.js' })
    expect(ret).toEqual([])
    done()
  })
})
