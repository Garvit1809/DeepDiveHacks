const express = require('express');
const researcherController = require('../controllers/researcherController');

const router = express.Router();

router.post('/login', researcherController.login);
router.post('/apply', researcherController.hire);

module.exports = router;
