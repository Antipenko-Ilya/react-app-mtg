const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();

var ROOT = __dirname;

var fs = require('fs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/', async(req, res, next)=>{
    try {
        const {nameOfFile} = req.body;
        let contents = fs.readFileSync(`${ROOT}/../files/${nameOfFile}.json`, 'utf8');
        contents = await JSON.parse(contents);
        res.json(contents);
    } 
    catch {
        res.json({errMsg: 'something went wrong...'});
    }
});



module.exports = router;