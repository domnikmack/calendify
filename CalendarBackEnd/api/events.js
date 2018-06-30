const express = require('express');
const router = express.Router();
const { Event } = require('../db/models');

router.post('/', (req, res, next) => {
  Event.create(req.body)
  .then(event => res.json(event))
  .catch(next);
});


router.get('/', (req, res, next) => {
  Event.findAll()
  .then(events => res.json(events))
  .catch(next);
});


module.exports = router;
