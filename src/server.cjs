require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./config/db.cjs');
const authRoutes = require('./routes/authRoutes.cjs');
const homeRoutes = require('./routes/homeRoutes.cjs');
const transactionRoutes = require('./routes/transactionRoutes.cjs');
let a
(async () => {
  const { default: message } = await import('./ai/llmcall.js');
  a=message;
})();


connectDB();
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(authRoutes);
app.use('/api',homeRoutes);
app.use(transactionRoutes);
app.get('/home', (req, res) => {
  res.render('pages/home',{ currentPage:'home'});
});
app.get('/prediction',(req,res)=>{
  res.render('pages/prediction',
    {currentPage:'prediction',
    message:a
  });
})
app.get('/login', (req, res) => {
  res.render('pages/login',{ currentPage: 'login' });
});

app.get('/signup', (req, res) => {
  res.render('pages/signup',{ currentPage: 'signup' });
});
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
