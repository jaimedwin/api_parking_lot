const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res
    .status(300)
    .setHeader('Content-Type', 'text/plain')
    .end('Hello world');
})

module.exports = app;
