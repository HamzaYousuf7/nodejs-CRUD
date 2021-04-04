const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  res
    .status(404)
    .json({ message: "Unknown endpoint, check your endpoint and try again" });
});

module.exports = router;
