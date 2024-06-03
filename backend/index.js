// /backend/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('.backend/models');
const userRouter = require('./routes/users');
const articleRouter = require('./routes/articles');
const mediaRouter = require('./routes/media');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.log('Error syncing database: ', err);
});

app.use('/users', userRouter);
app.use('/articles', articleRouter);
app.use('/media', mediaRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// User routes
app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

