const population = require('../models').Population;

exports.createPopulation = async(req, res) => {
	const result = await population.create({...req.body});

	res.json(result);
};