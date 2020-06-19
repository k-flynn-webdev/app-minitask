const has = require('../helpers/has.js')
const logger = require('../services/logger.js')
const mysqlVal = require('../helpers/MYSQL_value.js')
const tasks = require('../services/task.service.js')
const projects = require('../services/project.service.js')

function Init(app) {
  app.on('UPDATE-PROJECT-PROGRESS', UpdateProjectProgress)
}

module.exports = Init

/**
 * Update a projects progress and task count
 *    after a trigger event
 *
 * @param id
 */
function UpdateProjectProgress ({ project }) {
  return tasks.GetTasksByProject(project)
  .then(allTasks => {
      const projectUpdate = {
        id: project,
        tasksTotal: allTasks.length,
        tasksDone: allTasks.filter(item => item.isDone === 1).length,
        isDone: false
      }

      if (projectUpdate.tasksDone === projectUpdate.tasksTotal) {
        projectUpdate.isDone = true
      }

     return projects.Update(projectUpdate)
  })
  .catch(err => {
    logger.Log(err)
  })
}