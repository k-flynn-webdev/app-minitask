//Here we Init all service funcs that have a .Init(app).
const fs = require('fs')
const path = require('path')

const logger = require('../services/logger.js')
const dirFind = require('../helpers/dir_find.js')
const listToString = require('../helpers/list_to_string.js')

function InitInterfaces(app) {

  return new Promise( (resolve, reject) => {

    let tempDir = path.join(__dirname, '..', 'interfaces')

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    dirFind(tempDir, '.js', function (err, result) {

      if (err) {
        return reject(err)
      }

      let initFiles = []
      let allPromises = []

      // apply Init interfaces ..
      for (let i = 0; i < result.length; i++) {
        try {
          let tmp = require(path.join(tempDir, result[i]))
          if (tmp.Init !== undefined) {
            initFiles.push(result[i])
            allPromises.push(tmp.Init(app))
          }
        } catch(e) {
          return reject(e)
        }
      }

      return Promise.all(allPromises)
      .then(() => {
        const newLine = '\t\t\t\t\t\t\t  '
        logger.Log('\t✅ Interface .Init()\t' +
          listToString(initFiles, '[ ', ' ]', 60, newLine))
      })
      .then(() => resolve())
      .catch((err) => reject(err))
    })
  })
}

module.exports = InitInterfaces
