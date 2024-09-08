let express = require("express");
const { fetchCategory, createCategory, deleteCategory, updateCategory } = require("../controller/category.controller");
let route = express.Router();



route.get("/get", fetchCategory);
route.post("/add", createCategory);
route.delete("/delete/:id", deleteCategory);
route.put("/update/:id", updateCategory)


module.exports = route;