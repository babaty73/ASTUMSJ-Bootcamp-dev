const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const env = require('./config/env');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(env.port, () => {
  console.log(`${env.appName} is running on port ${env.port}`);
});