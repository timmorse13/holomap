const router = require("express").Router();
const characterController = require("../../controllers/characterController");

router.route("/")
    .get(characterController.findAll);
    
router.route("/:id")
    .get(characterController.findbyPk);

module.exports = router;