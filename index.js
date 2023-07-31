const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(express.json());

const status = require('./conf/status.js');
app.use('/v1/conf/status', status);

/*
app.use(express.urlencoded({
    extended: true
}));*/
app.listen(port, () => console.log('listening on port 3000!'));