const { Router } = require('express');
const { createPopulation, getPopulation, deletePopulation } = require('../controller/populationController');

const router = Router();

router.route('/').post(createPopulation).get(getPopulation);
router.route('/:id').delete(deletePopulation);

module.exports = router;
