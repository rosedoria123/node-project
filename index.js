const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Require router modules
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

// Use the routers for specific paths
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

