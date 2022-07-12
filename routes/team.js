const express = require('express');
const router = express.Router();
const team = require('../services/team');

/* GET team */
router.get('/', async function(req, res, next) {
  try {
    res.json(await team.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting teams `, err.message);
    next(err);
  }
});

/* POST team */
router.post('/', async function(req, res, next) {
  try {
    res.json(await team.create(req.body));
  } catch (err) {
    console.error(`Error while creating team`, err.message);
    next(err);
  }
});

/* UPDATE team */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await team.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating team`, err.message);
    next(err);
  }
});

/* DELETE team */
router.delete('/:id', async function(req, res, next) {
  try{
    res.json(await team.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting team`, err.message);
    next(err);
  }
});

module.exports = router;