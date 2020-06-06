const missing = require('./missing.js')
const has = require('../../helpers/has.js')
const exit = require('../../services/exit.js')

/**
 * Validates email
 *
 * @param 	  {string} 	  input		email address
 * @returns   {boolean}
 */
function validEmail(input) {
  let emailTmp = input.trim()
  let tmp = emailTmp.split('@')
  if (emailTmp.length < 5 || tmp.length < 2) return false
  let domainStop = tmp[1].indexOf('.')
  return (domainStop > 0 && domainStop < tmp[1].length - 1)
}

/**
 * Ensures email property to exist
 *
 * @param     {object}    req
 * @param     {object}    res
 * @returns   {boolean}
 */
function required(req, res) {
  if (!has.hasAnItem(req.body.email)) {
    exit(res, 422, missing('email'))
    return false
  }

  return valid(req, res)
}

exports.required = required

/**
 * Checks email is valid
 *
 * @param     {object}    req
 * @param     {object}    res
 * @returns   {boolean}
 */
function valid(req, res) {
  if (has.hasAnItem(req.body.email)) {
    if (validEmail(req.body.email)) {
      exit(res, 422, 'The email must be valid.')
      return false
    }
  }

  return true
}

exports.valid = valid