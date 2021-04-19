const router = require("express").Router();
const planetController = require("../../controllers/planetController");

router.route("/")
    .get(planetController.findAll);
    
router.route("/:name")
    .get(planetController.findbyPk);

module.exports = router