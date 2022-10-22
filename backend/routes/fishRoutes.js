const express = require('express');
const fishController = require('../controllers/fishController');
const researcherController = require('../controllers/researcherController');

const router = express.Router();

router
  .route('/')
  .get(fishController.getAllSpecies)
  .post(researcherController.restrictTo('researcher', 'lead-researcher'), fishController.createFishSpecies);

router.get('/:species', fishController.getOneSpecies);

router.post('/found-new', fishController.fileNewFish);

module.exports = router;
