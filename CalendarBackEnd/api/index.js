const express = require('express');
const router = express.Router();

router.use('/events', require('./events'));

router.use((req, res, next) => {
  res.sendStatus(404);
});

module.exports = router;
