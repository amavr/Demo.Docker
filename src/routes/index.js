const express = require('express');

router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const answer = {
        "NODE_ENV": process.env.NODE_ENV,
        "Platform": process.platform,
        "NodeJS": process.version,
        "Arch": process.arch
    }

    res.json(answer);
});

module.exports = router;
