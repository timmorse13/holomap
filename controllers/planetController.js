const { Planets, Characters } = require("../models")


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
        Planets.findByPk(req.params.name, {
            include: [{
                model: Characters,
                attributes: ['name', 'gender', 'skin_color', 'hair_color', 'height', 'eye_color', 'mass', 'planet_name', 'birth_year', 'starships', 'description', 'image']
            }]})
        .then(dbPlanets => res.json(dbPlanets))
        .catch(err => res.status(422).json(err));
    }
};
