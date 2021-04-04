const express = require("express");
const bodyParser = require("body-parser");

// local imp
const productRouter = require("./routes/productRoutes");
const notFoundRotes = require("./routes/NotFoundRoutes");

// app start
const app = express();

// handling all routes
app.use("/api/product", productRouter);

// 404 routes
app.use(notFoundRotes);
// error
app.use((error, req, res, next) => {});

// app listening
app.listen(process.env.PORT, () => {
  console.log(`App is running on PORT  ${process.env.PORT}`);
});
