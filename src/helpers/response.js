
/**
 * Response handles all http responses
 */
class Response {

  /**
     * Sends Success Response Message
     * @param {object} res Express Response
     * @param {number} status  The Http Response Code
     * @param {string} message The Response Message
     * @param {object} data The Response Data
     */
  async success(res, status, message, data) {
    res.status(status).send({
      status,
      message,
      data,
    });
  }

  /**
     * Sends Error Response Message
     * @param {object} res Express Response
     * @param {number} status  The Http Response Code
     * @param {string} message The Response Message
     * @param {object} error The Response Error
     */
  async error(res, status, message, error) {
    res.status(status).send({
      status,
      message,
      error,
    });
  }

}
export default new Response();