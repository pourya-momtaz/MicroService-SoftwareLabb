const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello. I am Pourya. How are you?');
});

app.listen(port, () => {
  console.log(`Hello service listening at http://localhost:${port}`);
});
