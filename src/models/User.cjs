const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true }
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },


  totalIncome: { type: Number, default: 0 },
  totalExpense: { type: Number, default: 0 },

  categoryIncome: {
    type: Map,
    of: Number,
    default: {}
  },
  categoryExpenses: {
    type: Map,
    of: Number,
    default: {}
  },
  transactions: [transactionSchema]
});

module.exports = mongoose.model('User', userSchema);

