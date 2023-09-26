require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// all databaseSchema....
const User = require("./models/UserModel").user;
const Book = require("./models/BookModel").book;
class DatabaseHelper {
    mainConnection() {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.DATABASE_CONNECTION).then(()=> {
            console.log("Connected to Main DB");
            databaseModelsCommon = {
                user: mongoose.connection.model("User", User),
                book: mongoose.connection.model("Book", Book)
            }
            databaseModels = {...databaseModelsCommon};
        },
        err => {console.error("Error: connecting main DB", err);}
        )
    }
}

module.exports = new DatabaseHelper();