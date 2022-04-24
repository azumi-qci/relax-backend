const jwt = require('jsonwebtoken');

/**
 * @param {Request} request
 * @param {Response} response
 */
async function verifyToken(request, response, next) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return response.status(401).send({
      message: 'Unauthorized',
    });
  }

  const token = authorization.split(' ')[1];

  if (!token) {
    return response.status(401).send({
      message: 'Unauthorized',
    });
  }

  // Verify token using JWT
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    request.currentUser = {
      id: payload.sub,
      email: payload.email,
    };

    next();
  } catch (error) {
    console.warn(error);

    return response.status(401).send({
      message: 'Unauthorized',
    });
  }
}

module.exports = verifyToken;
