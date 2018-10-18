const express = require('express');
const mongoose = require('mongoose');
const app = express();

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const bodyParser = require('body-parser');

const db = require('./config/keys').db;

mongoose
  .connect(db)
  .then(() => {
    console.log('mongo db connected');
  })
  .catch(err => {
    console.log('err', err);
  });

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));
