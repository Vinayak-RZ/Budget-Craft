const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.cjs');

const SALT_ROUNDS = 10;
// const SECRET_KEY = process.env.JWT_SECRET;
const SECRET_KEY = "AC9A87C1FB4194CCD5CE8A2219B5A3D99AF1298C4B";
exports.signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({
      username,
      password: hashedPassword,
      totalIncome: 0,
      totalExpense: 0,
      categoryExpenses: {},
      transactions: []
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });

  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      SECRET_KEY,
      { expiresIn: '600s' } 
    );

    return res.status(200).json({
      message: 'Login successful!',
      token
    });

  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
