const { Router } = require('express');
const { createPopulation, getPopulation } = require('../controller/populationController');

const router = Router();

router.route('/').post(createPopulation).get(getPopulation);

module.exports = router;
