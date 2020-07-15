/**
 * Get cookie from request.
 *
 * @param  {Object} req
 * @param  {String} key
 * @param  {Boolean} json
 * @return {String|undefined}
 */
export default function cookieFromRequest(req, key, json) {
  if (!req.headers.cookie) {
    return
  }

  const cookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`))

  if (cookie) {
    const value = cookie.split('=')[1]
    return json ? JSON.parse(decodeURIComponent(value)) : value
  }
}
