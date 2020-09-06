// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const { BadRequest } = require('@feathersjs/errors');

/**
 * Checks if a User Id matches the token Id
 *    if not verified throws an error
 *
 * @return {function(*): *}
 */
const userMatchesToken = (context) => {

  if (context.params.user && context.id) {

    const userIdMatches = Number(context.id) === context.params.user.id;
    const userIsAdmin = context.params.user.role === 'admin';

    if (!userIsAdmin && !userIdMatches) {
      context.statusCode = 400;
      const error = new BadRequest('User and Token do not match.');
      context.dispatch = error;
      context.error = error;
      return error;
    }
  }

  return context;
};

module.exports = userMatchesToken;