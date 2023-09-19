const express = require("express");

const imageRoute = require("./image.route");

const router = express.Router();

router.use("/image", imageRoute);

module.exports = router;