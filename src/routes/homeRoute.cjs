const express = require('express');
const router = express.Router();
const User = require('../models/User.cjs');
const authenticateToken = require('../middleware/authMiddleware.cjs');

router.get('/home', authenticateToken,async (req, res) => {
  try {
    const user = req.User.username;

    const income = user.totalIncome || 0;
    const expense = user.totalExpense || 0;
    const balance = income - expense;
    const savedPercentage = income === 0 ? 0 : ((balance / income) * 100);
    const chartData = Object.fromEntries(user.categoryExpenses);

    res.json({
      income,
      expense,
      balance,
      savedPercentage,
      chartData
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching home data' });
  }
});

module.exports = router;
