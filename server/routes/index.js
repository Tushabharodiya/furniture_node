let express = require("express");
let routes = express.Router();
let categoryRoute = require("./category.route")

routes.use("/category", categoryRoute);


module.exports = routes;