const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database');
require('./relationship'); 
require('dotenv').config({
  path: "./config/config.env",
});
const ErrorHandler = require('./utils/errorHandler.js');
const morgan = require('morgan');
const userRoutes = require('./routes/user.routes.js');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use(morgan('dev'));

app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
      res.status(err.statusCode).json({
          status: 'error',
          message: err.message
      });
  } else {
      res.status(500).json({
          status: 'error',
          message: 'Internal Server Error'
      });
  }
});

app.use('/api/user', userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');

    await sequelize.sync({ force: false });
    console.log('Database synced successfully.');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to sync database or start server:', err);
  }
};

startServer();