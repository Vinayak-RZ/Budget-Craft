const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware.cjs');
const User = require('../models/User.cjs');

// GET /api/home — Protected route to get user stats
router.get('/home', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); 

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const income = user.totalIncome || 0;
    const expense = user.totalExpense || 0;
    const balance = income - expense;
    const savedPercentage = income > 0 ? (balance / income) * 100 : 0;

    // Convert Maps to plain objects for frontend compatibility
    const categoryIncome = Object.fromEntries(user.categoryIncome || []);
    const categoryExpense = Object.fromEntries(user.categoryExpenses || []);

    // Send both categoryIncome and categoryExpense for Chart.js
    res.json({
      income,
      expense,
      balance,
      savedPercentage,
      chartData: {
        income: categoryIncome,
        expense: categoryExpense
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching home data' });
  }
});

module.exports = router;
