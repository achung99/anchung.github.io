'use strict';
const express = require('express');
const app = express();


// define all endpoints here


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${8000}/`);
  });