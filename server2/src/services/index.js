const task = require('./task/task.service.js');
const goal = require('./goal/goal.service.js');
const users = require('./users/users.service.js');
const verify = require('./verify/verify.service.js');
const project = require('./project/project.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(task);
  app.configure(goal);
  app.configure(users);
  app.configure(verify);
  app.configure(project);
};
