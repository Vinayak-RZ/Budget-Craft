const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, required: true },      
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true }
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  totalIncome: { type: Number, default: 0 },
  totalExpense: { type: Number, default: 0 },
  categoryExpenses: {
    type: Map,
    of: Number,
    default: {}
  },
  transactions: [transactionSchema] 
});

module.exports = mongoose.model('User', userSchema);
