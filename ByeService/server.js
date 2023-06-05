const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/name', (req, res) => {
  res.send('You are leaving? :(( Farewell my friend.');
});

app.listen(port, () => {
  console.log(`Bye service listening at http://localhost:${port}`);
});
