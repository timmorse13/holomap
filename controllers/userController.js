const { User } = require("../models")

module.exports = {
    findAll: function(req, res) {
        User.findAll(req.query)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    },
    findbyPk: function(req, res) {
        console.log('findByPk')
        User.findByPk(req.params.id)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    }
};