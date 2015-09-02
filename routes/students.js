var express = require('express');
var router = express.Router();
var students = require('../models/students');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(students);
  res.send(students);
});

module.exports = router;