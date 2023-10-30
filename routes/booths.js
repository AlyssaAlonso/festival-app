var express = require("express");
var router = express.Router();
const boothsCtrl = require("../controllers/booths");
// /booths

// looking at all the booths we have
router.get("/", boothsCtrl.index);
router.get("/new", boothsCtrl.new);
router.post("/", boothsCtrl.create);

// /booths/*
router.get("/:id", boothsCtrl.show);

module.exports = router;
