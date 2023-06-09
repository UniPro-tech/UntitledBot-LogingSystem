const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

var usersRouter = require('./conf/status.js');
app.use('/v1/conf/status', usersRouter);

app.listen(port,()=>{
    console.log("listen on!!");
});