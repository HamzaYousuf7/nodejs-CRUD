// local imp
const Pool = require("../DB/connectionPool");

exports.getProducts = async (req, res, next) => {
  const query = `SELECT * FROM product`;
  Pool.query(query, (error, result) => {
    // if any error
    if (error) {
      return res.status(500).json({
        message: "something went wrong try again later",
        sqlErrorMessage: error.sqlMessage,
      });
    }

    // sending back the response
    res.status(200).json({
      message: "successfully fetch all the products",
      products: result,
    });
  });
};

exports.getProduct = (req, res, next) => {};
exports.addProduct = (req, res, next) => {};
exports.updateProduct = (req, res, next) => {};
exports.deleteProduct = (req, res, next) => {};
