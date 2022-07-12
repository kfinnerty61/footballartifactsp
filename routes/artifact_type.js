const express = require('express');
const router = express.Router();
const artifact_type = require('../services/artifact_type');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await artifact_type.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting artifact types `, err.message);
    next(err);
  }
});

/* POST artifact_type */
router.post('/', async function(req, res, next) {
  try {
    res.json(await artifact_type.create(req.body));
  } catch (err) {
    console.error(`Error while creating artifact_type`, err.message);
    next(err);
  }
});

/* UPDATE artifact_type */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await artifact_type.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating artifact type`, err.message);
    next(err);
  }
});

/* DELETE artifact_type */
router.delete('/:id', async function(req, res, next) {
  try{
    res.json(await artifact_type.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting artifact type`, err.message);
    next(err);
  }
});

module.exports = router;