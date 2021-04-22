const router = require("express").Router();
const planetController = require("../../controllers/planetController");
const { Characters } = require("../../models");
const { Planets } = require("../../models");

router.route("/")
    .get(planetController.findAll);
    
router.route("/:name")
    .get(planetController.findbyPk);

module.exports = router