'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Reports = mongoose.model('Reports');
var PDF = require('pdfkit');
var fs = require('fs');
var text = 'ANY_TEXT_YOU_WANT_TO_WRITE_IN_PDF_DOC';

router.post('/create', function (req, res) {
    Reports.create(req.body)
    .then( resolved, error)

    function resolved (value) {

           return res.send(value).status(200);
    }
    function error (err) {
         next(err);
    }
});


router.get('/doc', function (req, res) {
      // # Create a document
        var doc = new PDF();
        doc.pipe(fs.createWriteStream('./vendor/qc.pdf'));
        doc.text(text, 200, 100);
        doc.end();
        var tempFile="./vendor/qc.pdf";
        // res.set({'Content-Type': 'application/pdf'})
        // res.set({'Access-Control-Allow-Origin': '*'})
        // res.set({'Content-Disposition': 'attachment; filename=qc.pdf'})
        res.download('./output.pdf', "output.pdf");
})

router.get('/', function (req, res, next) {
    Reports.find()
    .then( resolved, error )

    function resolved (results) {
          res.json(results).status(200);
    }
    function error (err) {
         next(err);
    }
})

router.get('/report/:id', function (req, res, next) {
    Reports.findById(req.params.id)
    .then( resolved, error )

    function resolved (results) {
          console.log("results", results)
          return res.json(results).status(200);
    }
    function error (err) {
         next(err);
    }
})

router.get('/reportsObj/', function (req, res, next) {
    Reports.find({}).select({'general.project_number': 1, 'general.project_name': 1})
    .then( resolved, error )

    function resolved (results) {
          return res.json(results).status(200);
    }
    function error (err) {
         next(err);
    }
})



