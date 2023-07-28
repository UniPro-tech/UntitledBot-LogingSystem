var express = require('express');
var router = express.Router();
const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

/* GET users listing. */
router.get('/', function (req, res, next) {
    try {
        var data = db.get("status");
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
        throw err;
    }
});
router.post('/', (req, res, next) => {
    try{
        db.put(req.body,"status");
    }
    catch(err){
        res.status(500).json(err);
        throw err;
    }
});

module.exports = router;