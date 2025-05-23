const User = require('../models/User.cjs');

const addTransaction = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { type, category, amount, date } = req.body;

    if (!type || !category || !amount || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const transaction = { type, category, amount, date };
    user.transactions.push(transaction);

    if (type === 'income') {
      user.totalIncome += amount;
      const prev = user.categoryIncome.get(category) || 0;
      user.categoryIncome.set(category, prev + amount);
    } else if (type === 'expense') {
      user.totalExpense += amount;
      const prev = user.categoryExpenses.get(category) || 0;
      user.categoryExpenses.set(category, prev + amount);

      user.markModified('categoryExpenses');
    }

    await user.save();

    res.status(201).json({ message: 'Transaction added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error adding transaction' });
  }
};


module.exports = {
  addTransaction,
};
