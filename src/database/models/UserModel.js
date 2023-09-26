const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema ({
    name: {
        type: String
    },
    age: {
        type: Number
    },
});

// module.exports.user = mongoose.model("User", UserSchema)

module.exports.user = UserSchema;