const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database');
require('./relationship'); 
const ErrorHandler = require('./utils/errorHandler.js');




const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Zomato Clone Backend!');
});

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


const startServer = async () => {
  try {
      await sequelize.sync({ force: false }); 
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
      console.log("Database synced successfully.");
  } catch (err) {
      console.error("Failed to sync database or start server:", err);
  }
};

startServer();