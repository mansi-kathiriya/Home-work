const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const sub_categoryRoute = require("./sub-category.route");
const productRoute = require("./product.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/sub-category", sub_categoryRoute);
router.use("/product", productRoute);

module.exports = router;

