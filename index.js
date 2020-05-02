const express = require('express');

const db = require('./db/index.js');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/homes/:id', (req, res) => {
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
