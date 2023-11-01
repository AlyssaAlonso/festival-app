var express = require("express");
var router = express.Router();
const boothsCtrl = require("../controllers/booths");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", boothsCtrl.index);
router.get("/new", ensureLoggedIn, boothsCtrl.new);
router.get("/:id", boothsCtrl.show);
router.post("/", ensureLoggedIn, boothsCtrl.create);

module.exports = router;
