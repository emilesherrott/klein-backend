const express = require("express")
const fruitRouter = express.Router()
const fruitsController = require("../controllers/fruits")

fruitRouter.get("/", fruitsController.index)
fruitRouter.get("/:name", fruitsController.show)
fruitRouter.post("/", fruitsController.create)

module.exports = fruitRouter