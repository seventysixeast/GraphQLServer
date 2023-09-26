
const users = require("../database/models/UserModel").user

class UserController {
    async getUser (req, res) {
        const {
            user: User,
            book: Books
        } = databaseModels;

        // let add = new User({"name": "Paul Auster",
        // "age": 23})
        // await add.save();

        // let add = new Books({
        //     title: "City of Glass",
        //     author:"Paul Auster"})
        // await add.save();

        let a = await User.find({});
        console.log(a)

        return res.send({
            success: true,
            msg: "Rest api is working",
            data: a
        })

    }
}

module.exports = new UserController();