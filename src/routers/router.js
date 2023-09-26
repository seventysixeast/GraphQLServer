const Router = require("express").Router;
const router = new Router();
const user = require("./routers/userRoutes");

router.route("/", ).get((req, res) => {
    res.json({ message: "Survey management API" });
});

router.use('/api', user);

module.exports = router;