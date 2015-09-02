var express = require('express');
var router = express.Router();
var students = require('../models/students');
var parser = require('body-parser');
var fs = require('fs');
var path = require('path');

/* GET students listing. */
router.get("/", function(req, res, next) {
  console.log("studenty stuff")
  console.log(students);
  res.send(students);
  res.render('index',{students:students});

});


router.post('/', function(req, res, next) {

  var studentsArray = students;

  studentsArray.push(req.body);
  console.log(studentsArray);

  var absPath = path.join(__dirname, '../models/students.json');

  fs.writeFile(absPath, JSON.stringify(studentsArray), 'utf-8', function (err) {
    if (err) return console.log(err);
    console.log('Wrote Data');
    res.sendStatus(200)
  });

});


module.exports = router;