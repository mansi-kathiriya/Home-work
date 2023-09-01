const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const bookRoute = require("./book.route");
const hotalRoute = require("./hotal.route");
const busRoute = require("./bus.route");
const stationaryRoute = require("./stationary.route");
const schoolRoute = require("./school.route");
const travelRoute = require("./travel.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/book", bookRoute);
router.use("/hotal", hotalRoute);
router.use("/bus", busRoute);
router.use("/stationary", stationaryRoute);
router.use("/school", schoolRoute);
router.use("/travel", travelRoute);

module.exports = router;

