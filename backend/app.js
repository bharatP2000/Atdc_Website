const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Error middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ message: err.message });
});

module.exports = app;
