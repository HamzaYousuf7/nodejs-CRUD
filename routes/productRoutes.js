const express = require("express");

// local imp
const productController = require("../controllers/productController");

// start
const router = express.Router();

// handling all the routes
router.get("/", productController.getProducts);
router.get("/:ID", productController.getProduct);
router.post("/addProduct", productController.addProduct);
router.put("/:ID", productController.updateProduct);
router.delete("/:ID", productController.deleteProduct);

module.exports = router;
