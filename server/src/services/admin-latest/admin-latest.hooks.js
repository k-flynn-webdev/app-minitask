const { authenticate } = require('@feathersjs/authentication').hooks;
const limitToRole = require('../../hooks/limit-to-role')

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      limitToRole('admin')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
