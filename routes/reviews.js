const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.post("/items/:id/reviews", ensureLoggedIn, reviewsCtrl.create);

router.put("/reviews/:id", ensureLoggedIn, reviewsCtrl.update);

router.delete("/reviews/:id", ensureLoggedIn, reviewsCtrl.delete);

module.exports = router;
