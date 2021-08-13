const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('hi');
});

app.listen(7890);
