const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST /items/:id/reviews (create review for a item)
router.post("/items/:id/reviews", ensureLoggedIn, reviewsCtrl.create);

// DELETE /reviews
router.delete("/reviews/:id", ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;
