const express = require('express');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/homes/:id', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/public` }, (err) => {
    if (err) res.sendStatus(404);
  });
});

app.get('/homes/:id/images', (req, res) => {
  const { id } = req.params;
  db.homes.get(id, (err, home) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(home);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port', PORT);
});
