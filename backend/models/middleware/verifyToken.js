// verifyToken.js
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Access denied. No token.' });

  const token = authHeader.split(' ')[1]; // 'Bearer <token>'

  if (!token) return res.status(401).json({ error: 'Access denied. No token.' });

  try {
    const verified = jwt.verify(token, 'secret123'); // secret key should be in env var
    req.user = verified; // token payload, e.g., { id: 'adminId', iat: ..., exp: ... }
    next();
  } catch (err) {
    res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = verifyToken;
