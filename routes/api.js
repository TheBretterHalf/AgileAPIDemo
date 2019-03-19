const express = require ('express');
const router = express.Router();
const Employee = require('../models/employee');

// get a list of ninjas from the db
router.get('/employees', function(req, res, next){
    Employee.create(req.body).then(function(employee){
        res.send(employee);
    }).catch(next);
});

// add a new ninja to the db
router.post('/employees', function(req, res, next){
    Employee.create(req.body).then(function(employee){
        res.send(employee);
    }).catch(next);
});

module.exports = router;