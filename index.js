

const express = require('express');
const app = express();
const port = 8000;


app.get('/', (req, res) => {
  res.send('This is fine.');
});


app.listen(port);
console.log(`app listening on port ${port}`);
