// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const  jsonDecode = require('jsonwebtoken').decode;

/**
 * If a JS token fails, check if its a Anon user and issue a
 *    refresh token, less than ideal
 *
 * @param context
 * @return {*}
 */
// todo: redo this completely! very hacky
const isAnon = async (context) => {

  const tokenIsExpired = (context.error &&
      context.error.data &&
      context.error.data.name === 'TokenExpiredError' &&
    !!context.error.data.expiredAt)

  const constants = context.app.get('constants')

  if (tokenIsExpired) {
    const userID = jsonDecode(context.params.authentication.accessToken).id;
    const userFound = await context.app.service(constants.path.users).
      get({ id: userID });
    const isAnon = (userFound.role === 'anon');

    if (!isAnon) return context;

    const userPayload = {
      sub: userFound.id,
      id: userFound.id,
      role: userFound.role,
      created_at: userFound.created_at
    };


    const token = await context.app.service(constants.path.authentication).
      createAccessToken(userPayload);

    context.statusCode = 401;
    context.result = { message: 'Token has expired', tokenIsExpired: true, token };
  }


  return context;
};

module.exports = isAnon;
