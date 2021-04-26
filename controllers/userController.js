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
    },
    create: function(req, res) {
        User.create(req.body)
        .then(dbUsers => res.json(dbUsers))
        .catch(err => res.status(422).json(err));
    },
    login: function(req, res) {
        console.log('Logging in the user');
        User.findOne({email: req.body.email})
        .then((dbUsers) => {
            console.log(dbUsers);
            if (dbUsers.password == req.body.password) {
                console.log('User has logged in!');
                req.session.save(() => {
                    req.session.user_id = dbUsers.id;
                    req.session.username = dbUsers.username;
                    req.session.logged_in = true;

                    res.status(200).json({message: 'Success!'});
                });
            } else {
                res.status(400).json({message: 'Failed!'});
            }
        })
        .catch(err => res.status(422).json(err));
    },
    logout: function(req, res) {
        console.log('Session Destroyed.');
        req.session.destroy(() => {
            res.json({message:'Successfully logged out!'});
        });
    },
    // update: function(req, res) {
    //     console.log('update user hit');
    //     console.log(req.body);
    //     db.User
    //       .findOneAndUpdate({ _id: req.params.id }, req.body)
    //       .then(dbModel => {
    //         console.log(dbModel);
    //         res.json(dbModel)
    //       })
    //       .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //     db.User
    //       .findById({ _id: req.params.id })
    //       .then(dbModel => dbModel.remove())
    //       .then(dbModel => res.json(dbModel))
    //       .catch(err => res.status(422).json(err));
    // },
};