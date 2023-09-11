const express = require("express");

const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const sub_categoryRoute = require("./sub-category.route");
const subchildcategoryRoute = require("./subchildcategory.route");
const productRoute = require("./product.route");
const cartRoute = require("./cart.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/sub-category", sub_categoryRoute);
router.use("/subchildcategory", subchildcategoryRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);

module.exports = router;

