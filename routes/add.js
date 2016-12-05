var express = require("express");
var router = express.Router();

router.get('/', function (req, res) {
	res.render('/add.jade');
});

module.exports = router;
