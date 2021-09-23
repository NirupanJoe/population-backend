const express = require('express');
const { createPopulation } = require('../controller/populationController');

const router = express.Router();

router.route('/').post(createPopulation);

module.exports = router;
