var express = require("express");
var router = express.Router();
const itemsCtrl = require("../controllers/items");

// // GET /items
// router.get("/booths/:boothId/items", itemsCtrl.index);
// // GET /items/new
// router.get("/booths/:boothId/new", itemsCtrl.new);
// // GET /items/:id (show functionality) MUST be below new route
router.get("/booths/:boothId/:id", itemsCtrl.show);
// POST /items
router.post("/booths/:boothId/items", itemsCtrl.create);

module.exports = router;
