const express = require('express');
const router = express.Router();
const artifact = require('../services/artifact');

/* GET artifact */
router.get('/', async function(req, res, next) {
  try {
    res.json(await artifact.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting artifacts `, err.message);
    next(err);
  }
});

/* POST artifact */
router.post('/', async function(req, res, next) {
  try {
    res.json(await artifact.create(req.body));
  } catch (err) {
    console.error(`Error while creating artifact`, err.message);
    next(err);
  }
});

/* UPDATE artifact */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await artifact.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating artifact`, err.message);
    next(err);
  }
});

/* DELETE artifact */
router.delete('/:id', async function(req, res, next) {
  try{
    res.json(await artifact.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting artifact`, err.message);
    next(err);
  }
});

module.exports = router;