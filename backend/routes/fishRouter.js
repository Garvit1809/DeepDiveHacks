const express = require('express');
const fishController = require('../controllers/fishController');

const router = express.Router();

router.route('/').get(fishController.getAllSpecies).post(fishController.createFishSpecies);
router.get('/:species', fishController.getOneSpecies);

module.exports = router;
