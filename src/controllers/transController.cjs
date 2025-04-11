const User = require('../models/User.cjs');

const addTransaction = async (req, res) => {
  try {
    const { type, category, amount, date } = req.body;
    const userId = req.user.id;

    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return res.status(400).json({ message: 'Amount must be a number' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    const transaction = {
      type,
      category,
      amount: numericAmount,
      date: new Date(date)
    };

    // Push to transactions array
    user.transactions.push(transaction);

    // Update income/expense 
    if (type === 'income') {
      user.totalIncome += numericAmount;
    } else if (type === 'expense') {
      user.totalExpense += numericAmount;
      const current = user.categoryExpenses.get(category) || 0;
      user.categoryExpenses.set(category, current + numericAmount);
    }

    await user.save();

    res.status(201).json({
      message: 'Transaction added successfully',
      transaction
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  addTransaction,
};
