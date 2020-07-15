const has = require('../helpers/has.js')
const task = require('../services/task.service.js')
const token = require('../services/token.service.js')
const mysqlVal = require('../helpers/MYSQL_value.js')
const constants = require('../constants')

/**
 * Deletes a task &
 *    runs the logic &
 *    returns the result
 *
 * @param {object}    input   task info [project, user, text, user permission]
 * @param {object}    app     express app
 * @returns {object}  taskObj promise
 */
function taskDelete(input, app) {
  return task.GetTaskByID(input.id)
  .then(tskFnd => {
    let taskObj = mysqlVal(tskFnd)

    if (!has.hasAnItem(taskObj)) {
      throw {
        status: 404,
        message: constants.errors.TASK_NOT_FOUND
      }
    }

    return Promise.all(
      [Promise.resolve(taskObj),
      task.Delete(input.id)])
  })
  .then(([taskObj, deleted]) => {
    app.emit(constants.events.UPDATE_PROGRESS_PROJECT,
      { project: taskObj.project })

    return task.SafeExport(taskObj)
  })
}

module.exports = taskDelete
