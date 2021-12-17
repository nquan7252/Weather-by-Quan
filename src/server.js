const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'public/index.html'));
});

app.listen(port);