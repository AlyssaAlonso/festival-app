var express = require("express");
var router = express.Router();
const pavilionsCtrl = require("../controllers/pavilions");

router.get("/", pavilionsCtrl.index);
router.get("/new", pavilionsCtrl.new);
router.post("/", pavilionsCtrl.create);
router.get("/:id", pavilionsCtrl.show);

module.exports = router;
