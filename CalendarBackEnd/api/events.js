const express = require('express');
const router = express.Router();
const { Event, User } = require('../db/models');

router.post('/', (req, res, next) => {
  User.findOrCreate({where: { name: 'Spot', email: 'spot@spotify.com' }})
  .then(([user, conf]) => {
    let event = Event.build(req.body);
    event.setUser(user, {save: false})
    return event.save();
  })
  .then(event => res.json(event))
  .catch(next);
});

router.put('/:eventId', (req, res, next) => {
  const id = req.params.eventId;
  Event.findById(id)
  .then(event => event.update(req.body))
  .then(updatedEvent => res.status(200).json(updatedEvent))
  .catch(next);
})

router.get('/', (req, res, next) => {
  Event.findAll()
  .then(events => res.json(events))
  .catch(next);
});

router.delete('/:eventId', (req, res, next) => {
  const id = req.params.eventId;
  Event.destroy({where: {id}})
  .then(() => res.sendStatus(202))
  .catch(next);
})


module.exports = router;
