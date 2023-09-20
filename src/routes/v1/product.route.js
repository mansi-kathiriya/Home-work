const express = require("express");
const { upload } = require("../../middlewares/upload")
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

// create Product
router.post(
  "/create-product",
  upload.single("product_image"),
  validate(productValidation.createProduct),
  productController.createProduct
);

// Get Product list
router.get(
  "/product-list",
  auth(),
  productController.getProductList
);

// get Product details by id
router.get(
  "/get-details/:productId",
  productController.getProductDetails
)

// update Product
router.put(
  "/update-product/:productId",
  auth(),
  productController.updateProduct
)

// delete Product
router.delete(
  auth(),
  "/delete-product/:productId",
  productController.deleteRecord
)

module.exports = router;