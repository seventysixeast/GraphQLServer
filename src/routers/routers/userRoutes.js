const userController = require("../../controllers/userControllers");
const Router = require("express").Router;
const router = new Router();

router
    .route("/getUser")
    .get((...args) => userController.getUser(...args));

module.exports = router;