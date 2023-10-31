var express = require("express");
var router = express.Router();
const itemsCtrl = require("../controllers/items");

// // GET /items
router.get("/booths/:boothId/items", itemsCtrl.index);
// // GET /items/new
router.get("/booths/:boothId/items/new", itemsCtrl.new);
// // GET /items/:id (show functionality) MUST be below new route
router.get("/booths/:boothId/items/:id", itemsCtrl.show);
// POST /movies
router.post("/booths/:boothId/items", itemsCtrl.create);

module.exports = router;
