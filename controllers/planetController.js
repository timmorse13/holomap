const { Planets } = require("../models")

// create

// destroy

// findByPk (req.params.name)

// find pass in a where {req.params.name} clause for planets

module.exports = {
    findAll: function(req, res) {
        Planets.findAll(req.query)
        .then(dbPlanets => res.json(dbPlanets))
        .catch(err => res.status(422).json(err));
    },
    findbyPk: function(req, res) {
        Planets.findByPk(req.params.name)
        .then(dbPlanets => res.json(dbPlanets))
        .catch(err => res.status(422).json(err));
    }
};