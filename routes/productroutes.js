const express = require("express");
const { getProducts, createProduct } = require("../controller/productController");
const protect = require("../middleware/authMiddlerware");

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, createProduct);

module.exports = router;
