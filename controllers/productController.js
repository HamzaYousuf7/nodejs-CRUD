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

exports.getProduct = (req, res, next) => {
  const ID = req.params.ID;

  const query = `SELECT * 
                  FROM product
                  WHERE id = ${ID}`;
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

exports.addProduct = (req, res, next) => {
  const { name, price, imgURL } = req.body;

  const query = `INSERT INTO product(name,price,imgURL) VALUES('${name}','${price}','${imgURL}')`;
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
      message: "successfully added new  product",
    });
  });
};

exports.updateProduct = (req, res, next) => {
  const { ID } = req.params;
  const { name, price, imgURL } = req.body;

  const query = `
                  UPDATE product 
                    SET name = "${name}", price = ${price},imgURL = "${imgURL}"
                    WHERE id= ${ID}
                `;

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
      message: `successfully update product with product ID ${ID}`,
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  const { ID } = req.params;

  const query = `
                DELETE FROM product
                	WHERE id= ${ID}
                `;

  Pool.query(query, (error, result) => {
    // if any error
    if (error) {
      return res.status(500).json({
        message: "something went wrong try again later",
        sqlErrorMessage: error.sqlMessage,
      });
    }

    if (result.affectedRows == 0) {
      // sending back the response
      return res.status(404).json({
        message: `unable to find the product with product id ${ID}`,
      });
    } else {
      // sending back the response
      return res.status(200).json({
        message: `successfully Delete product with product ID ${ID}`,
      });
    }
  });
};
