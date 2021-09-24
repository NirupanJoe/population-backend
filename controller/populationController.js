const population = require('../models').Population;
const { Op } = require('sequelize');

exports.createPopulation = async(req, res) => {
	const result = await population.create({...req.body});

	res.json(result);
};

exports.getPopulation = async(req, res) => {
	const result = await population.findAll();

	res.json(result);
};

exports.deletePopulation = async(req, res) => {
	const result = await population.destroy({
		where: {
			id: {
				[Op.eq]: req.params.id,
			},
		},
	});

	res.json(result);
};