const fs = require('fs')
const path = require('path')
const attrs = require('../constants/attrs.js')

const logger = require('../services/logger.js')
const dirFind = require('../helpers/dir_find.js')
const listToString = require('../helpers/list_to_string.js')

function Routes(app) {

  return new Promise( (resolve, reject) => {

    let tempDir = path.join(__dirname, '..', 'api', 'routes')

    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    dirFind(tempDir, '.js', function (err, result) {

      if (err) {
        return reject(err)
      }

      // apply routes ..
      for (let i = 0; i < result.length; i++) {
        try {
          require(path.join(tempDir, result[i]))(app)
        } catch (e) {
          return reject(e)
        }
      }
      const newLine = '\t\t\t\t\t\t\t  '
      logger.Log('\t✅ Routes\t\t' +
        listToString(result, '[ ', ' ]', attrs.print.maxWidth, attrs.print.maxNewLine))
      return resolve()
    })
  })
}

module.exports = Routes
