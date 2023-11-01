const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const itemsCtrl = require("../controllers/items");

// GET /items
router.get("/", itemsCtrl.index);
// GET /items/new
router.get("/new", itemsCtrl.new);
// GET /items/:id (show functionality) MUST be below new route
router.get("/:id", itemsCtrl.show);
// POST /items
router.post("/", itemsCtrl.create);

module.exports = router;
