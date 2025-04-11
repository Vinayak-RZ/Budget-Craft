const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware.cjs');

router.get('/protected',verifyToken, (req, res) => {
  res.json({ message: 'You accessed a protected route', user: req.user });
  console.log("someosome");
});

module.exports = router;
