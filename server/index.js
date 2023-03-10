const path = require('path');
const express = require('express');
const axios = require('axios');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

let port = 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

module.exports = app;
