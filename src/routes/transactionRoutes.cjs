const express = require('express');
const router = express.Router();
const { addTransaction } = require('../controllers/transcontroller.cjs');
const authenticateToken = require('../middleware/authMiddleware.cjs');

router.post('/api/transactions', authenticateToken, addTransaction);

module.exports = router;
