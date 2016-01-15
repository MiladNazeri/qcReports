'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var mongoose = require('mongoose');
var Reports = mongoose.model('Reports')

router.post('/create', function (req, res) {
    Reports.create(req.body)
    .then( resolved, error)

    function resolved (value) {
          res.json(value).status(200);
    }
    function error (err) {
         next(err);
    }
});

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