var express = require("express");
var router = express.Router();
const itemsCtrl = require("../controllers/items");
// /booths

// looking at all the booths we have
router.post("/booths/:boothId/items", itemsCtrl.create);

module.exports = router;
