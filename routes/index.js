const express = require('express');
const spawn = require('child_process').spawn;
var exe = 'C:\\Program Files\\Google\\Chrome\\application\\chrome.exe';

const router = express.Router();
router.get('/', (req, res) => {
    res.send('Olá mundo!');
});

router.post('/alert', (req, res) => {


});

module.exports = router;
