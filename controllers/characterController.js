const { Characters } = require("../models");

module.exports = {
    findAll: function(req, res) {
        Characters.findAll(req.query)
        .then(dbCharacters => res.json(dbCharacters))
        .catch(err => res.status(422).json(err));
    },
    findbyPk: function(req, res) {
        console.log('findByPk')
        Characters.findByPk(req.params.id)
        .then(dbCharacters => res.json(dbCharacters))
        .catch(err => res.status(422).json(err));
    }
};

