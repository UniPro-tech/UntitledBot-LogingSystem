const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

const port = process.env.PORT || 8080;

const express = require('express');
const app = express();
const status = require('./conf/status.js');
app.use('/v1/conf/status', status);
app.listen(port, () => console.log('listening on port 3000!'));