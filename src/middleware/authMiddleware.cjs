const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });
  console.log("at verify");
  try {
    const decoded = jwt.verify(token,"AC9A87C1FB4194CCD5CE8A2219B5A3D99AF1298C4B");
    //.env is not working
    console.log("verified");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
    console.log("didnot verify");
  }
};

module.exports = verifyToken;
