const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.cjs');
const authenticateToken = require('../middleware/authMiddleware.cjs');

router.post('/login', authController.loginUser);
router.post('/signup', authController.signup); 

module.exports = router;
