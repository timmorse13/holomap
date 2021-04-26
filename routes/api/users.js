const router = require("express").Router();
const { User } = require('../../models');
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create);
    
router.route("/:id")
    .get(userController.findbyPk);

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/check', userController.checkLoggedIn);


module.exports = router;