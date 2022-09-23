const express = require('express');

require('dotenv').config();

const userRoutes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);

app.use('/', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message || 'Internal Server Error' });
});

app.listen(3000, () => console.log('Server running on port ' + process.env.PORT));