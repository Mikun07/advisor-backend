const express = require("express");
const router = express.Router();
const { list, findByScore } = require("../controllers/stocks.controller");

router.get("/", list);
router.get("/:score", findByScore);

module.exports = router;
