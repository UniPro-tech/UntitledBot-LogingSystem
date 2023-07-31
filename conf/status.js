var express = require('express');
var router = express.Router();
const { Deta } = require('deta');
const deta = Deta();
const db = deta.Base('log-conf');

/* GET users listing. */
router.get('/', async function (req, res, next) {
    console.log("GET!!");
    try {
        const data = await db.get("status");
        console.log(data);
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
        throw err;
    }
});
router.post('/', (req, res, next) => {
    console.log(req.body);
    try {
        db.put(req.body, "status");
        console.log("putting!!");
        console.log(req.body);
        res.status(200).json(req.body);
    }
    catch (err) {
        res.status(500).json(err);
        throw err;
    }
});

module.exports = router;