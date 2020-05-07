const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');
router.get('/contacts', (req, res, next) => {
    
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});

router.post('/contact', (req, res, next) => {
    var newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, doc) => {
        if (!err) {
            res.send(doc)
        }
        else { console.log('Error in save' + JSON.stringify(err, undefined, 2)); }
        
    });

});

    

router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }


    });
});
module.exports = router;