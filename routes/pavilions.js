var express = require("express");
var router = express.Router();
const pavilionsCtrl = require("../controllers/pavilions");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", pavilionsCtrl.index);
router.get("/new", ensureLoggedIn, pavilionsCtrl.new);
router.get("/:id", pavilionsCtrl.show);
router.get("/:id/menus", pavilionsCtrl.showMenus);
router.post("/", ensureLoggedIn, pavilionsCtrl.create);

module.exports = router;
